const fs = require('fs');

const path = '/Users/doddykapisha/Downloads/GITDODDY/new bengkel wiguna/src/data/equipment.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// Coordinates mapping based on typical car anatomy facing left
const coordinates = {
  "Ruang Bakar": { top: "40%", left: "25%" },
  "Sistem Pelumasan": { top: "45%", left: "28%" },
  "Fuel System": { top: "35%", left: "32%" },
  "Cooling System": { top: "45%", left: "15%" },
  "Bak Oli (Karter)": { top: "75%", left: "28%" },

  "Shockbreaker": { top: "65%", left: "22%" },
  "Tie Rod": { top: "75%", left: "18%" },
  "Ball Joint": { top: "80%", left: "22%" },
  "Bushing Arm": { top: "85%", left: "25%" },
  "Wheel Bearing": { top: "75%", left: "22%" },

  "Evaporator": { top: "45%", left: "45%" },
  "Blower": { top: "48%", left: "42%" },
  "Jalur Freon": { top: "45%", left: "35%" },
  "Area Kabin": { top: "40%", left: "55%" },

  "Radiator": { top: "45%", left: "12%" },
  "Water Pump": { top: "50%", left: "20%" },
  "Engine Block": { top: "45%", left: "28%" }
};

data.forEach(item => {
  if (item.hotspots) {
    item.hotspots.forEach(hotspot => {
      const title = hotspot.title;
      if (coordinates[title]) {
        hotspot.top = coordinates[title].top;
        hotspot.left = coordinates[title].left;
      }
    });
  }
});

fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
console.log('Coordinates updated successfully.');
