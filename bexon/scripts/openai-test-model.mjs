#!/usr/bin/env node
/**
 * Test OpenAI Fine-tuned Model - Bengkel Wiguna
 * 
 * Jalankan: node scripts/openai-test-model.mjs
 * Atau test pertanyaan spesifik: node scripts/openai-test-model.mjs "Berapa harga spooring?"
 */

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error('❌ OPENAI_API_KEY tidak ditemukan di environment!');
  console.error('   Load dulu: source .env.local atau export OPENAI_API_KEY=sk-...');
  process.exit(1);
}

// Ambil model dari finetune-job.json atau .env
function getModel() {
  const jobFile = path.join(__dirname, 'finetune-job.json');
  if (fs.existsSync(jobFile)) {
    const job = JSON.parse(fs.readFileSync(jobFile, 'utf-8'));
    if (job.fineTunedModel) {
      console.log(`🤖 Model: ${job.fineTunedModel} (fine-tuned)`);
      return job.fineTunedModel;
    }
  }
  // Fallback ke model standar
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
  console.log(`🤖 Model: ${model} (standar - fine-tuned belum tersedia)`);
  return model;
}

const SYSTEM_PROMPT = `Kamu adalah asisten AI Bengkel Wiguna, bengkel mobil terpercaya di Depok. 
Kamu membantu pelanggan dengan informasi layanan, harga estimasi, jadwal servis, dan booking. 
Selalu ramah, profesional, dan jawab dalam Bahasa Indonesia.`;

// ============================================
// FUNGSI CHAT DENGAN MODEL
// ============================================

async function chat(model, messages) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 800,
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(JSON.stringify(err.error));
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// ============================================
// MODE 1: TEST SATU PERTANYAAN
// ============================================

async function testSingleQuestion(model, question) {
  console.log(`\n💬 Pertanyaan: "${question}"`);
  console.log('⏳ Memproses...\n');
  
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    { role: 'user', content: question },
  ];

  const answer = await chat(model, messages);
  console.log('🤖 Jawaban AI Bengkel Wiguna:');
  console.log('─'.repeat(50));
  console.log(answer);
  console.log('─'.repeat(50));
}

// ============================================
// MODE 2: BENCHMARK TEST (beberapa pertanyaan)
// ============================================

const TEST_QUESTIONS = [
  'Apa saja layanan yang tersedia di Bengkel Wiguna?',
  'Berapa biaya ganti oli?',
  'Di mana lokasi bengkel?',
  'AC mobil saya tidak dingin, kenapa ya?',
  'Cara booking servis bagaimana?',
  'Apakah buka hari Minggu?',
  'Mobil Toyota Innova saya bunyi saat rem, berbahayakah?',
  'Ada promo apa sekarang?',
];

async function runBenchmark(model) {
  console.log('\n🧪 BENCHMARK TEST - Bengkel Wiguna AI');
  console.log('='.repeat(50));
  
  const results = [];

  for (let i = 0; i < TEST_QUESTIONS.length; i++) {
    const question = TEST_QUESTIONS[i];
    console.log(`\n[${i + 1}/${TEST_QUESTIONS.length}] "${question}"`);
    
    const startTime = Date.now();
    try {
      const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: question },
      ];
      
      const answer = await chat(model, messages);
      const duration = Date.now() - startTime;
      
      console.log(`✅ Jawaban (${duration}ms):`);
      console.log(answer.substring(0, 200) + (answer.length > 200 ? '...' : ''));
      
      results.push({ question, answer, duration, success: true });
    } catch (error) {
      console.error(`❌ Error: ${error.message}`);
      results.push({ question, error: error.message, success: false });
    }
    
    // Rate limit prevention
    if (i < TEST_QUESTIONS.length - 1) {
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  // Summary
  const successful = results.filter(r => r.success).length;
  const avgDuration = results
    .filter(r => r.duration)
    .reduce((sum, r) => sum + r.duration, 0) / successful;

  console.log('\n' + '='.repeat(50));
  console.log('📊 HASIL BENCHMARK:');
  console.log(`   Berhasil  : ${successful}/${TEST_QUESTIONS.length}`);
  console.log(`   Avg Waktu : ${Math.round(avgDuration)}ms`);
  console.log('='.repeat(50));

  // Simpan hasil
  const reportFile = path.join(__dirname, 'benchmark-results.json');
  fs.writeFileSync(reportFile, JSON.stringify({ model, timestamp: new Date().toISOString(), results }, null, 2));
  console.log(`\n💾 Hasil disimpan di: scripts/benchmark-results.json`);
}

// ============================================
// MODE 3: INTERACTIVE CHAT
// ============================================

async function interactiveChat(model) {
  console.log('\n💬 INTERACTIVE CHAT - Bengkel Wiguna AI');
  console.log('   (Ketik "exit" untuk keluar)');
  console.log('='.repeat(50));

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const history = [{ role: 'system', content: SYSTEM_PROMPT }];

  const ask = () => {
    rl.question('\n👤 Anda: ', async (input) => {
      if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
        console.log('\n👋 Sampai jumpa!');
        rl.close();
        return;
      }

      if (!input.trim()) {
        ask();
        return;
      }

      history.push({ role: 'user', content: input });

      try {
        process.stdout.write('🤖 AI: ');
        const answer = await chat(model, history);
        console.log(answer);
        history.push({ role: 'assistant', content: answer });
      } catch (error) {
        console.error(`❌ Error: ${error.message}`);
      }

      ask();
    });
  };

  ask();
}

// ============================================
// MAIN
// ============================================

async function main() {
  console.log('==========================================');
  console.log(' Test Bengkel Wiguna AI - OpenAI');
  console.log('==========================================');

  const model = getModel();
  const args = process.argv.slice(2);

  if (args.length > 0 && args[0] !== '--benchmark' && args[0] !== '--chat') {
    // Test pertanyaan spesifik
    await testSingleQuestion(model, args.join(' '));
  } else if (args[0] === '--benchmark') {
    // Benchmark semua pertanyaan
    await runBenchmark(model);
  } else if (args[0] === '--chat') {
    // Mode interaktif
    await interactiveChat(model);
  } else {
    // Default: benchmark
    console.log('\nMode:');
    console.log('  node scripts/openai-test-model.mjs "pertanyaan anda"   → Test 1 pertanyaan');
    console.log('  node scripts/openai-test-model.mjs --benchmark          → Test semua pertanyaan');
    console.log('  node scripts/openai-test-model.mjs --chat               → Chat interaktif');
    console.log('\nJalankan benchmark default...');
    await runBenchmark(model);
  }
}

main().catch(console.error);
