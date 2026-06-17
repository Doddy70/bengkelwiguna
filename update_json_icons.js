const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/data/equipment.json', 'utf8'));

// Service Berkala
data[0].hotspots[0].nodeIcon = "Droplet"; // Oli
data[0].hotspots[1].nodeIcon = "Disc"; // Rem
data[0].hotspots[2].nodeIcon = "Wind"; // Filter Udara

// Cek Kaki Kaki
data[1].hotspots[0].nodeIcon = "Activity"; // Suspension shaking

// Semi Overhaul
data[2].hotspots[0].nodeIcon = "Cpu"; // Engine block/Stinger

// Coolant Changer
data[3].hotspots[0].nodeIcon = "Thermometer"; // Coolant

// Reset AC
data[4].hotspots[0].nodeIcon = "Command"; // AC compressor/Flushing

fs.writeFileSync('src/data/equipment.json', JSON.stringify(data, null, 2));
console.log('Icons added to JSON');
