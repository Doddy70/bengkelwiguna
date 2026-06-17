const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/data/equipment.json', 'utf8'));

// Service Berkala
data[0].hotspots[0].diagnosa = "Oli mesin terkontaminasi kotoran, menyebabkan pelumasan berkurang.";
data[0].hotspots[0].gejala = "Tarikan mesin berat, suhu mesin cepat panas, dan suara mesin lebih kasar dari biasanya.";
data[0].hotspots[0].tindakan = "Penggantian oli 100% sintetis beserta filter oli untuk perlindungan maksimal.";

data[0].hotspots[1].diagnosa = "Kampas rem mulai menipis atau ada masalah pada suspensi bawah.";
data[0].hotspots[1].gejala = "Bunyi berdecit saat mengerem, atau setir terasa bergetar dan tidak stabil pada kecepatan tinggi.";
data[0].hotspots[1].tindakan = "Inspeksi kaki-kaki menyeluruh dan pembersihan area rem (Brake Cleaner).";

data[0].hotspots[2].diagnosa = "Filter kabin dan filter udara mesin kotor/tersumbat.";
data[0].hotspots[2].gejala = "AC kurang dingin, hembusan angin pelan, dan tarikan mesin sedikit tertahan.";
data[0].hotspots[2].tindakan = "Pembersihan atau penggantian filter udara dan AC untuk pernapasan mesin dan kabin yang sehat.";

// Cek Kaki Kaki
data[1].hotspots[0].diagnosa = "Komponen suspensi (shockbreaker, bushing, tie rod) mengalami keausan atau kelonggaran.";
data[1].hotspots[0].gejala = "Terdengar bunyi 'gluduk-gluduk' saat melewati jalan rusak, atau mobil terasa limbung.";
data[1].hotspots[0].tindakan = "Simulasi jalan rusak menggunakan Kyoto Shaking Machine untuk deteksi sumber bunyi dengan akurasi 100% tanpa perlu tes jalan.";

// Semi Overhaul
data[2].hotspots[0].diagnosa = "Penumpukan kerak karbon (sludge) ekstrem di dalam ruang bakar dan jalur sirkulasi oli mesin.";
data[2].hotspots[0].gejala = "Mobil kurang tenaga, bahan bakar boros, asap knalpot pekat, dan mesin sering ngelitik (knocking).";
data[2].hotspots[0].tindakan = "Treatment Semi Overhaul dengan Stinger Engine Flush; sirkulasi tekanan tinggi untuk merontokkan kerak tanpa perlu turun mesin total.";

// Coolant Changer
data[3].hotspots[0].diagnosa = "Cairan pendingin (coolant) mulai keruh, berkarat, atau ada gelembung udara (angin palsu) di sistem radiator.";
data[3].hotspots[0].gejala = "Indikator temperatur mesin sering naik mendekati batas merah (overheat) saat jalan macet.";
data[3].hotspots[0].tindakan = "Kuras radiator 100% menggunakan Prestone Coolant Changer dengan teknologi vakum otomatis yang membebaskan sistem dari angin palsu.";

// Reset AC
data[4].hotspots[0].diagnosa = "Oli kompresor AC sudah jenuh atau volume freon berkurang drastis.";
data[4].hotspots[0].gejala = "Hembusan AC siang hari tidak dingin, hanya keluar angin, atau tercium bau tidak sedap dari kisi-kisi AC.";
data[4].hotspots[0].tindakan = "Flushing AC 100% menggunakan Kyoto Flushing Machine, menguras oli kompresor lama dan mengisi freon baru dengan takaran digital yang sangat presisi.";

fs.writeFileSync('src/data/equipment.json', JSON.stringify(data, null, 2));
console.log('JSON updated!');
