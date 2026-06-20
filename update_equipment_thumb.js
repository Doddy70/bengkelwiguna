const fs = require('fs');

const path = './src/data/equipment.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const cekKakiKaki = data.find(e => e.id === "cek-kaki-kaki");
if (cekKakiKaki && cekKakiKaki.hotspots) {
  // Update index 1 (Tie Rod & Rackend)
  if (cekKakiKaki.hotspots[1]) {
    cekKakiKaki.hotspots[1].thumb = "/images/equipment/TieRod_Rackend_Thumb.png";
  }

  // Set colors for all hotspots to make them dynamic
  const colors = ["#224297", "#178937", "#d97706", "#6b21a8", "#0d9488", "#1e3a8a"];
  cekKakiKaki.hotspots.forEach((h, i) => {
    h.color = colors[i] || "#224297";
  });
}

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('equipment.json updated successfully');
