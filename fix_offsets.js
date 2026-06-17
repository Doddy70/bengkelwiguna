const fs = require('fs');
const path = './src/data/equipment.json';
const data = require(path);

// Semi Overhaul
// Ruang Bakar: { top: "40%", left: "25%" }
// Sistem Pelumasan: { top: "45%", left: "28%" }
// Fuel System: { top: "35%", left: "32%" }
// Cooling System: { top: "45%", left: "15%" }
// Bak Oli (Karter): { top: "75%", left: "28%" }

const offsets = {
  "Ruang Bakar": { x: -50, y: -120 },
  "Sistem Pelumasan": { x: 200, y: -80 },
  "Fuel System": { x: 250, y: -150 },
  "Cooling System": { x: -100, y: -80 },
  "Bak Oli (Karter)": { x: 150, y: 50 },

  "Shockbreaker": { x: -100, y: -100 },
  "Tie Rod": { x: 150, y: -50 },
  "Ball Joint": { x: -120, y: 50 },
  "Bushing Arm": { x: 200, y: 80 },
  "Wheel Bearing": { x: 150, y: 150 },

  "Evaporator": { x: -80, y: -120 },
  "Blower": { x: 200, y: -100 },
  "Jalur Freon": { x: -100, y: -50 },
  "Area Kabin": { x: 250, y: -150 },

  "Radiator": { x: -100, y: -100 },
  "Water Pump": { x: 150, y: -150 },
  "Engine Block": { x: 200, y: -50 },

  "Ganti Oli Mesin": { x: 200, y: 50 },
  "Cek Rem & Kaki-Kaki": { x: -100, y: 100 },
  "Filter Udara & AC": { x: 150, y: -150 }
};

data.forEach(item => {
  if (item.hotspots) {
    item.hotspots.forEach(hotspot => {
      const title = hotspot.title;
      if (offsets[title]) {
        hotspot.labelOffsetX = offsets[title].x;
        hotspot.labelOffsetY = offsets[title].y;
      } else {
        hotspot.labelOffsetX = 100;
        hotspot.labelOffsetY = -100;
      }
    });
  }
});

fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
console.log('Offsets updated successfully.');
