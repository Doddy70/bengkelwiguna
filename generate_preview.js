const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components/ui');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

const componentNames = files.map(f => f.replace('.tsx', ''));

let imports = `import React from 'react';
import { Settings, Shield, Zap } from 'lucide-react';\n\n`;

componentNames.forEach(name => {
    imports += `import ${name} from '@/components/ui/${name}';\n`;
});

let componentsArray = `\nconst componentsList = [\n`;
componentNames.forEach(name => {
    componentsArray += `  { name: '${name}', Component: ${name} },\n`;
});
componentsArray += `];\n\n`;

const pageContent = `
"use client";
${imports}
${componentsArray}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.toString() };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm overflow-auto">
          <strong>Failed to render (needs specific props):</strong><br />
          {this.state.errorMessage}
        </div>
      );
    }
    return this.props.children;
  }
}

export default function CompleteUIPreview() {
    // A massive dummy props object to satisfy most components
    const dummyProps = {
        title: "Contoh Judul Komponen",
        subtitle: "Contoh Subtitle",
        description: "Ini adalah deskripsi contoh untuk menampilkan preview komponen. Teks ini cukup panjang agar terlihat proporsional pada desain card atau hero.",
        content: "Ini adalah konten artikel atau teks panjang yang mungkin dibutuhkan oleh komponen blog atau sidebar.",
        image: "/images/promosi/promo-default.jpg",
        avatar: "/images/promosi/promo-default.jpg",
        img: "/images/promosi/promo-default.jpg",
        src: "/images/promosi/promo-default.jpg",
        bgImage: "/images/promosi/promo-default.jpg",
        date: "14 Juni 2026",
        author: "John Doe",
        name: "Budi Santoso",
        role: "Chief Mechanic",
        price: "Rp 500.000",
        priceSuffix: "/paket",
        discountText: "Promo",
        number: "01",
        count: 100,
        buttonText: "Klik di Sini",
        buttonLink: "#",
        link: "#",
        linkText: "Baca Selengkapnya",
        href: "#",
        label: "Label Tombol",
        icon: <Settings className="w-8 h-8 text-blue-500" />,
        Icon: <Settings className="w-8 h-8 text-blue-500" />,
        features: [{ text: "Fitur Unggulan 1" }, { text: "Fitur Unggulan 2" }, { text: "Fitur Unggulan 3" }],
        items: [
            { title: "Item 1", content: "Deskripsi item 1", text: "Teks item 1" },
            { title: "Item 2", content: "Deskripsi item 2", text: "Teks item 2" }
        ],
        sections: [{ title: "Section 1", items: ["Poin 1", "Poin 2"] }],
        whatYouCanDo: ["Langkah 1", "Langkah 2"],
        socials: [{ href: "#", label: "Social", icon: <Settings /> }],
        tags: ["Otomotif", "Promo"],
        category: "Servis Rutin",
        status: "aktif",
        colorTheme: "default",
        layout: "default",
        variant: "default",
        dataAos: "fade-up"
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Complete UI Component Gallery (60 Components)
                    </h1>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        Semua komponen dari archive dirender secara dinamis. Jika ada komponen yang merah, berarti komponen tersebut membutuhkan data (props) struktur yang sangat spesifik yang tidak bisa di-mock secara otomatis.
                    </p>
                </div>

                <div className="space-y-16">
                    {componentsList.map((comp, idx) => (
                        <section key={idx}>
                            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-6">
                                {idx + 1}. {comp.name}
                            </h2>
                            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
                                <ErrorBoundary>
                                    <comp.Component {...dummyProps} />
                                </ErrorBoundary>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
`;

fs.writeFileSync(path.join(__dirname, 'src/app/preview-ui/page.tsx'), pageContent);
console.log("Successfully generated complete preview page!");
