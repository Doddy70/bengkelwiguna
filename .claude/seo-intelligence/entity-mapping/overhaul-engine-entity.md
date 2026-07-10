# Entity Mapping — Cluster Overhaul Engine
> **Cluster:** Overhaul Mesin / Semi Overhaul / Turun Mesin
> **Date:** 2026-07-10
> **Rule:** R3 (Vehicle Entity Layer), R8 (Diagnosis Tree)

---

## MAIN ENTITY: OVERHAUL MESIN

---

## ENTITY HIERARCHY

### Level 1: Service Category
```
OVERHAUL MESIN
├── Full Overhaul (Overhaul Lengkap)
├── Semi Overhaul
└── Turun Mesin (Engine Drop)
```

### Level 2: Related Services
```
├── Bore Up
├── Bore Honing
├── Ring Honing
├── Valve Grinding
├── Head Milling
└── Crankshaft Grinding
```

---

## RELATED ENTITIES

### Components (R3 - Vehicle Entity Layer)

#### Top-Level Engine Components
| Entity | Related To | Symptoms | Diagnostic |
|--------|-----------|----------|------------|
| Cylinder Head | Head Gasket, Valve, Valve Seal | Overheat, power loss | Compression Test |
| Cylinder Block | Piston, Ring Piston, Bore | Knock, low compression | Bore Scope |
| Crankshaft | Connecting Rod, Main Bearing | Vibration, oil pressure | Vibration Analysis |
| Piston | Ring Piston, Connecting Rod | Blow-by, consumption | Compression Test |

#### Sub-Components
| Entity | Parent | Common Issues | Replacement Interval |
|--------|--------|--------------|-------------------|
| Ring Piston | Piston | Aus, macet | 80.000-150.000 km |
| Valve Seal | Cylinder Head | Bocor oli, asap biru | 60.000-100.000 km |
| Head Gasket | Cylinder Head/Block | Bocor coolant, overheat | Jika rusak |
| Timing Chain | Camshaft | Melar, bunyi | 100.000-150.000 km |
| Timing Belt | Camshaft | Patah, melar | 60.000-80.000 km |
| Oil Pump | Engine Block | Tekanan oli turun | 100.000+ km |
| Water Pump | Engine Block | Bocor coolant, bunyi | 60.000-80.000 km |
| Valve | Cylinder Head | Bending, aus | Jika rusak |
| Connecting Rod | Crankshaft | Bunyi ketuk, macet | Jika rusak |
| Main Bearing | Crankshaft | Bunyi, vibration | Jika rusak |

---

## DIAGNOSIS TREE (R8)

### Problem: Mesin Makan Oli

```
MESIN MAKAN OLI
│
├── [ ] Ada asap biru/putih?
│   ├── YA → Cek Valve Seal
│   │       ├── Normal compression → Valve Seal
│   │       └── Low compression → Ring Piston
│   │
│   └── TIDAK → Cek ring piston + PCV valve
│              ├── Normal compression → PCV Valve
│              └── Low compression → Ring Piston
│
└── [ ] Oil pressure rendah?
    ├── YA → Oil Pump / Main Bearing
    └── TIDAK → Normal
```

### Problem: Tenaga Turun

```
TENAGA TURUN
│
├── [ ] Ada bunyi ketuk?
│   ├── YA → Connecting Rod / Main Bearing
│   │       └── Oil pressure? → jika rendah = bearing aus
│   │
│   └── TIDAK → Cek:
│              ├── Timing Chain Slipping
│              ├── Fuel System
│              └── Compression Loss
│              └── Compression Test
│                  ├── Normal → Fuel System
│                  └── Low → Leak Down Test
│                      ├── Intake/Exhaust → Valve
│                      ├── Combustion → Ring Piston / Piston
│                      └── Cooling Jacket → Head Gasket
```

### Problem: Overheat

```
MESIN OVERHEAT
│
├── [ ] Coolant habis?
│   ├── YA → Cek kebocoran
│   │       ├── Radiator → Radiator Hose / Radiator
│   │       ├── Water Pump → Water Pump Seal
│   │       └── Engine → Head Gasket
│   │
│   └── TIDAK → Cek:
│              ├── Thermostat
│              ├── Water Pump
│              └── Radiator Fan
```

### Problem: Asap Putih

```
ASAP PUTIH (Coolant Burn)
│
├── [ ] Overheat sebelumnya?
│   ├── YA → Head Gasket (kemungkinan)
│   │
│   └── TIDAK → Compression Test
│              ├── Normal → Condensation (normal)
│              └── Low → Head Gasket / Cylinder Head
│                  └── Endoscope → Crack check
```

---

## VEHICLE ENTITY LAYER (R3)

### Toyota
| Model | Engine | Overhaul Complexity | Common Issues |
|-------|--------|-------------------|---------------|
| Avanza | 1NR-FE 1.3L / 2NR-FE 1.5L | MED | Ring piston aus, valve seal |
| Innova | 1TR-FE 2.0L / 2GD-FTV 2.4L Diesel | MED-HIGH | Head gasket diesel, injector |
| Fortuner | 1TR-FE 2.0L / 2GD-FTV 2.4L | HIGH | Turbo diesel, head gasket |
| Rush | 1NR-VE 1.5L | MED | Ring piston, valve seal |
| Yaris | 1NR-FE 1.3L / 2NR-FE 1.5L | MED | Ring piston |
| Agya | 1NR-FE 1.2L / 1KR-VE 1.2L | MED | Ring piston, valve seal |
| Vios | 1NR-FE 1.3L / 2NR-FE 1.5L | MED | Ring piston |

### Honda
| Model | Engine | Overhaul Complexity | Common Issues |
|-------|--------|-------------------|---------------|
| Brio | L12B 1.2L | MED | Ring piston, valve seal |
| Jazz | L15B 1.5L | MED | Ring piston, PCV |
| HR-V | L15A 1.5L / L15Z 1.5L | MED-HIGH | Timing chain, oil pump |
| Civic | R18A 1.8L / L15B 1.5L Turbo | HIGH | VTEC, turbo |
| CR-V | K24Z 2.4L | HIGH | Timing chain, oil consumption |
| BR-V | L15A 1.5L | MED | Ring piston |

### Mitsubishi
| Model | Engine | Overhaul Complexity | Common Issues |
|-------|--------|-------------------|---------------|
| Xpander | 4A91 1.5L | MED | Ring piston |
| Pajero Sport | 4D56 2.5L / 4N15 2.4L Diesel | HIGH | Turbo diesel, head gasket |
| Outlander | 4B11 2.0L / 6B31 3.0L | HIGH | Timing chain |

### Suzuki
| Model | Engine | Overhaul Complexity | Common Issues |
|-------|--------|-------------------|---------------|
| Ertiga | K14B 1.4L | MED | Ring piston |
| APV | G15A 1.5L | MED | Ring piston, timing belt |
| Carry | G15A 1.5L | LOW | Ring piston |

### Nissan
| Model | Engine | Overhaul Complexity | Common Issues |
|-------|--------|-------------------|---------------|
| Livina | HR16DE 1.6L | MED | Ring piston |
| X-Trail | QR25DE 2.5L | HIGH | Timing chain, oil consumption |
| Terrano | K4M 2.0L | MED | Ring piston |

---

## KNOWLEDGE GRAPH CONNECTIONS

### Semi Overhaul
```
Semi Overhaul
├── Part Of: Overhaul Mesin
├── Includes: Head Gasket, Valve Seal, Ring Piston (selective)
├── Symptoms: Mesin makan oli, tenaga turun
├── Diagnostic: Compression Test, Oil Pressure Test
├── Related: Turun Mesin, Bore Up
├── Vehicles: All (model-specific guides)
└── Articles: /semi-overhaul-mesin
```

### Full Overhaul
```
Overhaul Mesin
├── Includes: Full engine teardown
├── Components: Semua komponen mesin
├── Diagnostic: Leak Down Test, Endoscope
├── Related: Semi Overhaul, Turun Mesin, Bore Up
├── Symptoms: Overheat, bunyi ketuk, power loss
└── Articles: /overhaul-engine-mobil, /biaya-overhaul
```

### Turun Mesin
```
Turun Mesin
├── Related To: Overhaul, Semi Overhaul
├── Purpose: Access engine components
├── Process: Remove engine from chassis
├── When: Full overhaul, head gasket replacement
└── Articles: /turun-mesin-mobil
```

---

## CONTENT TEMPLATE RELATIONSHIPS

| From Article | Link Type | To Article |
|-------------|-----------|-------------|
| Overhaul Mesin Mobil | Pillar | Semi Overhaul |
| Overhaul Mesin Mobil | Pillar | Turun Mesin |
| Overhaul Mesin Mobil | Pillar | Biaya Overhaul |
| Semi Overhaul | Cluster | Tanda Overhaul |
| Semi Overhaul | Cluster | Diagnosis Compression Test |
| Semi Overhaul | Cluster | Valve Seal |
| Semi Overhaul | Cluster | Ring Piston |
| Tanda Overhaul | Cluster | Diagnosis Tree |
| Biaya Overhaul | Cluster | Perbandingan Bengkel |
| Biaya Overhaul | Cluster | Overhaul Avanza |
| Leak Down Test | Cluster | Compression Test |
| Leak Down Test | Cluster | Endoscope |
| Overhaul Avanza | Vehicle | Overhaul Innova |
| Overhaul Avanza | Vehicle | Overhaul Brio |

---

## INTERNAL LINKING STRATEGY

### Pillar Page: Overhaul Mesin Mobil
- Link to: Semi Overhaul, Turun Mesin, Biaya Overhaul
- Link to: Tanda Overhaul, Leak Down Test, Compression Test
- Link to: Overhaul Avanza, Overhaul Brio, Overhaul Innova
- Link to: Local SEO variations

### Cluster Articles
- Each article links to Pillar + 2-3 related cluster articles
- Vehicle-specific articles link to Pillar + parent vehicle cluster
- Diagnostic articles link to symptom articles

---

Generated by: Claude Code
Date: 2026-07-10
Rule: R3 (Vehicle Entity Layer), R8 (Diagnosis Tree), R9 (Content Reuse)
