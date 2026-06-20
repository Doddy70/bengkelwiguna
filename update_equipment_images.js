const fs = require('fs');
const path = './src/data/equipment.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const itemIndex = data.findIndex(item => item.id === "cek-kaki-kaki");
if (itemIndex !== -1) {
  data[itemIndex].image = "/images/equipment/mobil_kyoto.png";
  if (data[itemIndex].hotspots && data[itemIndex].hotspots[0]) {
    data[itemIndex].hotspots[0].thumb = "/images/equipment/SHOCK_SUPPORT_THUMB.png";
  }
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
  console.log("Updated image and hotspot 0 thumb in equipment.json");
} else {
  console.error("Item 'cek-kaki-kaki' not found.");
}