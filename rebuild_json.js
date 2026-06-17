const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/data/equipment.json', 'utf8'));

const getTab = (id) => data.find(d => d.id === id);
const overhaul = getTab('semi-overhaul');
const kakikaki = getTab('cek-kaki-kaki');
const ac = getTab('reset-ac');
const coolant = getTab('coolant-changer');
const service = getTab('service-berkala');

coolant.name = "Kuras Radiator";

const newData = [overhaul, kakikaki, ac, coolant, service];

overhaul.hotspots = [
  {
    "top": "25%",
    "left": "50%",
    "title": "Pembersihan Sludge & Kerak",
    "subtitle": "Stinger Engine Flush melarutkan lumpur oli dan kerak karbon di area atas mesin.",
    "labelOffsetX": 80,
    "labelOffsetY": -40,
    "widgetTitle": "Gejala Umum",
    "widgetDesc": "Tumpukan sludge mengurangi pelumasan di Cylinder Head, menyebabkan mesin ngelitik.",
    "widgetAction": "Melarutkan lumpur oli (oil sludge) dan kerak karbon.",
    "widgetMetric1": { "label": "Kerak Terbuang", "value": "99" },
    "widgetMetric2": { "label": "Visibilitas", "value": "100" },
    "nodeIcon": "Cpu"
  },
  {
    "top": "40%",
    "left": "65%",
    "title": "Sirkulasi Oli Optimal",
    "subtitle": "Membersihkan jalur pelumasan sehingga oli baru dapat bersirkulasi maksimal.",
    "labelOffsetX": 110,
    "labelOffsetY": -10,
    "widgetTitle": "Potensi Masalah",
    "widgetDesc": "Saluran oli yang tersumbat menyebabkan sirkulasi buruk dan overheat ringan.",
    "widgetAction": "Membersihkan jalur pelumasan untuk sirkulasi oli baru.",
    "widgetMetric1": { "label": "Flow Rate", "value": "Max" },
    "widgetMetric2": { "label": "Sumbatan", "value": "0" },
    "nodeIcon": "Droplet"
  },
  {
    "top": "55%",
    "left": "45%",
    "title": "Proteksi Keausan Komponen",
    "subtitle": "Mengurangi gesekan antar komponen seperti ring piston dan camshaft.",
    "labelOffsetX": -180,
    "labelOffsetY": 20,
    "widgetTitle": "Dampak Jangka Panjang",
    "widgetDesc": "Gesekan berlebih memperpendek usia komponen dan menyebabkan turun mesin total.",
    "widgetAction": "Gesekan berkurang, ring piston dan camshaft terlindungi.",
    "widgetMetric1": { "label": "Friction", "value": "Low" },
    "widgetMetric2": { "label": "Lifespan", "value": "+5Y" },
    "nodeIcon": "Shield"
  },
  {
    "top": "45%",
    "left": "30%",
    "title": "Kembalikan Performa & Efisiensi",
    "subtitle": "Mesin lebih responsif, idle halus, dan BBM efisien berkat pembakaran optimal.",
    "labelOffsetX": -160,
    "labelOffsetY": -20,
    "widgetTitle": "Keluhan Pengendara",
    "widgetDesc": "Tarikan terasa berat, BBM boros, dan putaran idle mesin tidak stabil.",
    "widgetAction": "Meningkatkan kompresi dan efisiensi pembakaran bahan bakar.",
    "widgetMetric1": { "label": "Performa", "value": "Max" },
    "widgetMetric2": { "label": "Efisiensi", "value": "Opt" },
    "nodeIcon": "Zap"
  },
  {
    "top": "75%",
    "left": "55%",
    "title": "Cegah Kerusakan Berulang",
    "subtitle": "Endapan kotoran di bak oli terbuang tuntas, menekan risiko kerusakan.",
    "labelOffsetX": 80,
    "labelOffsetY": 50,
    "widgetTitle": "Tindakan Akhir",
    "widgetDesc": "Kotoran sisa yang mengendap di karter dapat tersedot kembali oleh pompa oli.",
    "widgetAction": "Membuang penyebab utama masalah dari dasar bak oli.",
    "widgetMetric1": { "label": "Endapan", "value": "0" },
    "widgetMetric2": { "label": "Risiko", "value": "Safe" },
    "nodeIcon": "Crosshair"
  }
];

const convertToPercent = (pxStr) => {
  if (!pxStr || pxStr.includes('%')) return pxStr;
  const num = parseInt(pxStr);
  return `${Math.min(90, Math.max(10, Math.floor(num / 4)))}%`;
}

newData.forEach(tab => {
  if (tab.id !== 'semi-overhaul') {
    tab.hotspots = tab.hotspots?.map(h => ({
      ...h,
      top: convertToPercent(h.top),
      left: convertToPercent(h.left),
      widgetTitle: "Gejala Umum",
      widgetDesc: h.gejala || "Indikasi kerusakan.",
      widgetAction: h.tindakan || "Perbaikan Wiguna.",
      widgetMetric1: { "label": "Status", "value": "Cek" },
      widgetMetric2: { "label": "Kondisi", "value": "Aman" },
      nodeIcon: h.nodeIcon || "Activity"
    })) || [];
  }
});

fs.writeFileSync('src/data/equipment.json', JSON.stringify(newData, null, 2));
console.log('JSON rebuilt successfully.');
