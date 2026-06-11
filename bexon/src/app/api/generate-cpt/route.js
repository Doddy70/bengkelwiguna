import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

import { z } from 'zod';

const GenerateSchema = z.object({
  prompt: z.string().min(1, 'Prompt wajib diisi'),
  type: z.enum(['services', 'promosi', 'competitor_comparison', 'programmatic_seo'], {
    errorMap: () => ({ message: 'Tipe tidak valid' })
  })
});

export async function POST(req) {
  try {
    const body = await req.json();
    const result = GenerateSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: result.error.errors[0].message }, { status: 400 });
    }

    const { prompt, type } = result.data;

    // Define the schema based on type
    const isService = type === 'services';
    const isPromo = type === 'promosi';
    const isComparison = type === 'competitor_comparison';
    const isPSEO = type === 'programmatic_seo';
    const schemaName = isService ? 'service_generation' : (isComparison ? 'comparison_generation' : (isPSEO ? 'pseo_generation' : 'promosi_generation'));
    
    const schema = {
      type: "json_schema",
      json_schema: {
        name: schemaName,
        strict: true,
        schema: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "Judul postingan yang SEO-friendly"
            },
            content: {
              type: "string",
              description: "Konten HTML lengkap, gunakan tag <p>, <ul>, <ol>, <li>, <h3>, <table>. Awali dengan definisi 'X adalah Y'. Wajib menggunakan tabel atau list berurutan."
            },
            excerpt: {
              type: "string",
              description: "Ringkasan singkat maksimal 2 kalimat"
            },
            seo_title: {
              type: "string",
              description: "High intent SEO title tag (50-60 characters, keyword near beginning, brand at end, e.g., 'Layanan Spooring Ban Mobil Depok | Bengkel Wiguna')"
            },
            seo_description: {
              type: "string",
              description: "Compelling meta description (150-160 characters, keyword naturally included, strong CTA)"
            },
            seo_focus_keyword: {
              type: "string",
              description: "Main target focus keyword for SEO analysis"
            },
            schema_markup: {
              type: "string",
              description: "JSON-LD schema markup (LocalBusiness, Service, Offer, or Product) serialized as a JSON string."
            },
            meta: {
              type: "object",
              properties: isService ? {
                harga: { type: "string", description: "Estimasi harga (misal: 'Mulai dari Rp 300.000' atau 'Tergantung Kondisi')" },
                durasi: { type: "string", description: "Estimasi durasi pengerjaan (misal: '2 Jam' atau '1 Hari')" },
                garansi: { type: "string", description: "Info garansi (misal: '1 Bulan' atau 'Tidak Ada')" }
              } : (isPromo ? {
                diskon_persen: { type: "string", description: "Angka persentase diskon (misal: '30')" },
                harga_asli: { type: "string", description: "Harga sebelum diskon (misal: '500000')" },
                harga_promo: { type: "string", description: "Harga setelah diskon (misal: '350000')" },
                tanggal_mulai: { type: "string", description: "Tanggal mulai promo format YYYY-MM-DD" },
                tanggal_selesai: { type: "string", description: "Tanggal selesai promo format YYYY-MM-DD" }
              } : {
                keterangan: { type: "string", description: "Keterangan tambahan (Opsional)" }
              }),
              required: isService ? ["harga", "durasi", "garansi"] : (isPromo ? ["diskon_persen", "harga_asli", "harga_promo", "tanggal_mulai", "tanggal_selesai"] : []),
              additionalProperties: false
            }
          },
          required: ["title", "content", "excerpt", "seo_title", "seo_description", "seo_focus_keyword", "schema_markup", "meta"],
          additionalProperties: false
        }
      }
    };

    // 1. Generate Content using OpenAI
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Anda adalah AI Assistant untuk Bengkel Wiguna. Tugas Anda menghasilkan konten untuk Custom Post Type: ${type}.
ATURAN WAJIB:
1. GEO/AI SEO: Awali paragraf pertama dengan definisi berformat 'X adalah Y'. Gunakan <table> atau <ol> di dalam konten.
2. ENTITY CLARITY: Sebutkan 'Bengkel Wiguna' secara eksplisit di awal artikel.
3. SEO FUNDAMENTALS: Gunakan H2 lalu H3. Jangan meloncat hierarki.
4. LOCAL SEO: Target pasar mencakup Kota Depok, Jakarta Selatan, Tangsel, dan Bogor. Optimalkan untuk memenangkan pasar lokal di area tersebut. Kaitkan masalah mobil dengan konteks nyata setempat (misal: cuaca, kemacetan rute tol/Margonda, dsb). JANGAN sebut kota di luar area tersebut.
5. Jawab HANYA dengan format JSON sesuai skema yang diminta. Jangan gunakan markdown backticks.`
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: schema,
    });

    const generatedData = JSON.parse(completion.choices[0].message.content);

    // Generate featured image locally using OpenAI DALL-E (Fallback)
    let imageBase64 = null;
    try {
      console.log("Generating image with OpenAI DALL-E...");
      const imagePrompt = `Fotografi profesional, sebuah gambar yang merepresentasikan layanan otomotif: ${generatedData.title}. Realistik, detail tajam, pencahayaan dramatis, gaya sinematik.`;
      
      const imageResponse = await openai.images.generate({
        model: "dall-e-3",
        prompt: imagePrompt,
        n: 1,
        size: "1024x1024"
      });
      
      const imageUrl = imageResponse.data[0].url;
      if (imageUrl) {
        console.log("Downloading image from URL:", imageUrl);
        const imageRes = await fetch(imageUrl);
        const buffer = await imageRes.arrayBuffer();
        imageBase64 = Buffer.from(buffer).toString('base64');
        console.log("OpenAI DALL-E image downloaded and converted to base64 successfully.");
      }
    } catch (imageErr) {
      console.error("Failed to generate/download image via OpenAI DALL-E:", imageErr.message);
    }

    // 2. Post to WordPress Abilities API
    const wpUsername = process.env.WP_APP_USERNAME;
    const wpPassword = process.env.WP_APP_PASSWORD;

    if (!wpUsername || !wpPassword) {
       return NextResponse.json({ error: 'WP_APP_USERNAME atau WP_APP_PASSWORD belum dikonfigurasi di .env.local' }, { status: 500 });
    }

    const basicAuth = Buffer.from(`${wpUsername}:${wpPassword}`).toString('base64');
    
    // Construct payload for WP Abilities API
    const wpPayload = {
      post_type: type,
      title: generatedData.title,
      content: generatedData.content,
      excerpt: generatedData.excerpt,
      meta: generatedData.meta,
      seo_title: generatedData.seo_title,
      seo_description: generatedData.seo_description,
      seo_focus_keyword: generatedData.seo_focus_keyword,
      schema_markup: generatedData.schema_markup,
      generate_image: true
    };
    if (imageBase64) {
      wpPayload.image_base64 = imageBase64;
    }

    const wpRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp-abilities/v1/abilities/bw/ai-create-cpt/run`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${basicAuth}`,
        'X-WP-Authorization': `Basic ${basicAuth}`,
        'X-Authorization': `Basic ${basicAuth}`
      },
      body: JSON.stringify({ input: wpPayload })
    });

    const wpText = await wpRes.text();
    let wpData = {};
    try {
      wpData = JSON.parse(wpText);
    } catch (e) {
      console.error("Failed to parse WP response as JSON. Raw response:", wpText);
      return NextResponse.json({ error: `Gagal mempublikasikan ke WordPress (bukan JSON): ${wpText.substring(0, 500)}` }, { status: 500 });
    }

    if (!wpRes.ok) {
      console.error("WP API Error:", wpData);
      return NextResponse.json({ error: `Gagal mempublikasikan ke WordPress: ${wpData.message || wpRes.statusText}` }, { status: wpRes.status });
    }

    return NextResponse.json({ 
      success: true, 
      message: wpData.message || 'Konten berhasil di-generate dan diterbitkan!',
      post_id: wpData.post_id,
      generated_title: generatedData.title
    });

  } catch (error) {
    console.error('AI Generation Error:', error);
    return NextResponse.json({ error: error.message || 'Terjadi kesalahan internal' }, { status: 500 });
  }
}
