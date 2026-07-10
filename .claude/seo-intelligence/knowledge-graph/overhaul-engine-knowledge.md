# Knowledge Graph — Cluster Overhaul Engine
> **Cluster:** Overhaul Mesin / Semi Overhaul / Turun Mesin
> **Date:** 2026-07-10
> **Rule:** R5 (Knowledge Objects), R9 (Content Reuse)

---

## KNOWLEDGE OBJECTS

### KO-001: Overhaul Mesin Mobil

**Definition:**
Overhaul mesin adalah proses pembongkaran total mesin mobil untuk memeriksa, memperbaiki, atau mengganti komponen internal yang aus atau rusak. Proses ini mengembalikan performa mesin seperti kondisi baru.

**Components:**
- Cylinder Head overhaul
- Cylinder Block (bore, honing)
- Crankshaft grinding
- Piston & Ring replacement
- Full gasket set
- Timing components
- Oil pump & water pump

**Process:**
1. Engine removal (turun mesin)
2. Full teardown
3. Parts inspection & measurement
4. Component repair/replacement
5. Assembly
6. Engine installation
7. Tune-up & testing

**Duration:** 7-14 hari kerja

**Cost Range:** Rp 8.000.000 - Rp 25.000.000+ (depends on vehicle)

**Warranty:** 6-12 bulan

**Reusable In:**
- Pillar page: /overhaul-engine-mobil
- Cluster articles: Semi Overhaul, Turun Mesin, Biaya Overhaul
- FAQ section
- Local SEO content

---

### KO-002: Semi Overhaul

**Definition:**
Semi overhaul adalah proses perbaikan mesin yang lebih terbatas dari overhaul penuh. Biasanya fokus pada komponen upper engine (cylinder head, valve train, head gasket) tanpa membongkar block sepenuhnya.

**Components:**
- Cylinder Head (valve job, milling)
- Valve Seal replacement
- Head Gasket replacement
- Timing components (if needed)
- Full upper gasket set

**What NOT Included:**
- Piston & Ring
- Crankshaft
- Connecting Rod
- Oil Pump internal

**When To Choose:**
- Mesin makan oli (valve seal)
- Overheat (head gasket)
- Timing components failed
- Budget terbatas

**Duration:** 3-5 hari kerja

**Cost Range:** Rp 3.000.000 - Rp 8.000.000

**Reusable In:**
- Comparison article: Semi Overhaul vs Full Overhaul
- FAQ section
- Service pages

---

### KO-003: Ring Piston

**Definition:**
Ring piston adalah cincin metal yang dipasang pada piston untuk membuat seal antara piston dan cylinder wall. Fungsi utama: kompresi (mesin bisa compress) dan oil control (mengontrol oli agar tidak masuk ruang bakar).

**Symptoms When Damaged:**
- Mesin makan oli (oil consumption)
- Asap biru/hitam dari knalpot
- Tenaga turun (power loss)
- Bunyi ketuk halus
- Compression loss

**Diagnosis:**
1. Compression Test → low on affected cylinder
2. Leak Down Test → high leakage to crankcase
3. Oil Pressure Test → normal (differentiates from bearing)

**Causes:**
- Normal wear (80.000-150.000 km)
- Lack of oil / oil change neglect
- Coolant contamination (head gasket failure)
- Low quality fuel

**Replacement Interval:**
- Preventive: 100.000-150.000 km
- When damaged: Immediately

**Reusable In:**
- Tanda mesin overhaul article
- Compression test article
- Leak down test article
- Vehicle-specific guides

---

### KO-004: Valve Seal

**Definition:**
Valve seal (valve stem seal) adalah seal yang mencegah oli masuk ke ruang bakar melalui valve stem. Terletak di antara valve guide dan valve spring retainer.

**Symptoms When Damaged:**
- Mesin makan oli (bisa parah saat idle)
- Asap biru saat start dingin
- Oli kurang tanpa kebocoran external
- CVT chain/MT shift pattern affected by oil

**Diagnosis:**
1. Check for oil in spark plug wells
2. Visual inspection with borescope
3. Compression test (can be normal)
4. Leak down test

**Differentiate from Ring Piston:**
| Factor | Valve Seal | Ring Piston |
|--------|-----------|-------------|
| Oil consumption | High at idle | Consistent |
| Asap biru | Saat start dingin | Consistent |
| Compression | Normal | Low |
| Oil in plug well | Yes | No |

**Replacement:**
- Usually replaced in sets
- Include valve stem oil seal kit
- Recommended: Valve job with valve grind

**Reusable In:**
- Semi Overhaul article
- Tanda overhaul article
- FAQ sections

---

### KO-005: Head Gasket

**Definition:**
Head gasket adalah gasket yang meletakkan antara cylinder head dan engine block. Fungsi: seal combustion chamber, coolant passages, dan oil passages.

**Symptoms When Damaged:**
- Overheat (coolant masuk combustion chamber)
- White milky coolant (coolant contaminated oil)
- White smoke from exhaust (coolant burned)
- Loss of coolant without visible leak
- Poor idle, misfire
- Power loss

**Diagnosis:**
1. Visual: Check oil cap for mayonnaise-like substance
2. Check coolant for oil
3. Compression test (low on affected cylinder)
4. Leak down test (bubble in coolant)
5. Chemical test (combustion leak tester)

**Types of Head Gasket Failure:**
| Type | Symptom | Severity |
|------|---------|----------|
| Blown between cylinders | Misfire, power loss | HIGH |
| Coolant to oil | Milky oil, white smoke | CRITICAL |
| Coolant to exterior | Overheat, coolant loss | HIGH |
| Oil to coolant | Milky oil | HIGH |

**Reusable In:**
- Overheat article
- Semi Overhaul article
- FAQ sections

---

### KO-006: Leak Down Test

**Definition:**
Leak down test adalah diagnostic untuk mengukur seberapa banyak udara yang bocor dari combustion chamber saat engine diaselupkan. Diukur dalam persentase.

**Equipment Needed:**
- Leak down tester (hand pump type)
- Air compressor
- Spark plug socket
- Appropriate adapters

**Procedure:**
1. Remove spark plugs
2. Set piston at TDC (compression stroke)
3. Install adapter
4. Connect leak down tester
5. Apply air pressure (100 PSI)
6. Listen and observe for leaks

**Interpretation:**
| Leakage % | Condition | Action |
|-----------|-----------|--------|
| 0-5% | Excellent | No action |
| 5-10% | Acceptable | Monitor |
| 10-20% | Warning | Inspection needed |
| 20-30% | Problem | Repair needed |
| 30%+ | Critical | Immediate repair |

**Where Air Escapes:**
- Intake manifold → Intake valve leak
- Exhaust → Exhaust valve leak
- Radiator/coolant → Head gasket
- Crankcase → Ring/piston damage

**Reusable In:**
- Diagnostic guide
- FAQ section
- Internal linking to compression test

---

### KO-007: Compression Test

**Definition:**
Compression test mengukur tekanan maximum yang dihasilkan di dalam cylinder saat piston menekan campuran udara-bahan bakar.

**Equipment:**
- Compression tester kit
- Throttle body holder (for carbureted)
- Sometimes: MAF sensor disconnect

**Procedure:**
1. Warm up engine
2. Remove all spark plugs
3. Disable ignition + fuel
4. Install compression tester
5. Crank engine 4-5 revolutions
6. Record reading
7. Repeat for all cylinders

**Interpretation:**
| Compression PSI | Condition |
|----------------|-----------|
| 125-180 (varies by engine) | Normal |
| Variation >10% between cylinders | Problem |
| Low on one cylinder | Local problem |
| Low on all cylinders | General wear |

**Wet vs Dry Test:**
- Dry: Standard compression test
- Wet: Add 1 tsp oil, re-test
  - If compression improves → Ring/piston problem
  - If no change → Valve or head gasket

**Reusable In:**
- Diagnostic guide
- FAQ section
- Link to leak down test

---

### KO-008: Endoscope Engine Inspection

**Definition:**
Borescope/endoscope inspection menggunakan kamera kecil untuk melihat kondisi internal engine tanpa membongkar.

**Equipment:**
- Automotive borescope (3.5mm-8mm diameter)
- LED light source
- Display (built-in or phone app)

**What To Inspect:**
1. Cylinder walls (scoring, glazing)
2. Piston crown (carbon buildup, damage)
3. Valve seats (for valve seal seat condition)
4. Combustion chamber
5. Intake manifold interior

**Findings:**
- Cylinder glazing → hone needed
- Carbon buildup → cleaning needed
- Valve seat wear → valve job needed
- Scratches/scoring → ring/piston issue
- Coolant contamination → head gasket

**Reusable In:**
- Diagnostic guide
- Overhaul process article
- Pre-purchase inspection article

---

### KO-009: Turun Mesin

**Definition:**
Turun mesin adalah proses melepas mesin dari chassis kendaraan untuk memudahkan perbaikan atau overhaul.

**When Needed:**
- Full engine overhaul
- Head gasket replacement (some vehicles)
- Transmission removal required
- Engine replacement
- Major transmission work

**Process Overview:**
1. Drain all fluids (oil, coolant, transmission)
2. Disconnect battery
3. Remove hood (if needed)
4. Remove components:
   - Intake manifold
   - Exhaust manifold
   - All electrical connectors
   - All hoses
   - Transmission
5. Support engine
6. Remove engine mounts
7. Lift engine out

**Time:** 2-4 jam (remove) + 2-4 jam (install)

**Reusable In:**
- FAQ sections
- Process articles
- Service descriptions

---

## KNOWLEDGE OBJECT RELATIONSHIPS

```
┌─────────────────────────────────────────────────────────────┐
│                    OVERHAUL MESIN                            │
│                        │                                    │
│         ┌──────────────┼──────────────┐                   │
│         │              │              │                    │
│    FULL OVERHAUL  SEMI OVERHAUL   TURUN MESIN              │
│    (KO-001)        (KO-002)      (KO-009)                  │
│         │              │              │                    │
│    Components    Upper Engine    Engine Drop               │
│    ├── Ring Piston   ├── Valve Seal   └──────┐            │
│    ├── Valve Seal    ├── Head Gasket           │           │
│    ├── Head Gasket   └── Timing                │           │
│    ├── Timing Chain                     ┌─────┘           │
│    └── Crankshaft                             │            │
│                                              │            │
└──────────────────────────────────────────────┘            │
         │                                             │
         │         Diagnostic Tests                     │
         │         ┌─────────────┐                     │
         │         │ Compression │                     │
         │         │ Test (KO-007)│                     │
         │         └──────┬──────┘                     │
         │                │                              │
         │    ┌───────────┴───────────┐                │
         │    │                       │                  │
         │ Leak Down (KO-006)    Endoscope (KO-008)     │
         │    │                       │                  │
         └────┼───────────────────────┘                  │
              │                                           │
              ▼                                           │
     ┌─────────────────┐                                 │
     │  Common Issues  │                                 │
     │  ├── Ring Piston│                                 │
     │  │   (KO-003)   │                                 │
     │  ├── Valve Seal │                                 │
     │  │   (KO-004)   │                                 │
     │  └── Head Gasket│                                 │
     │      (KO-005)   │                                 │
     └─────────────────┘                                 │
```

---

## CONTENT REUSE TRACKING (R9)

| Knowledge Object | Reused In | Times |
|-----------------|-----------|-------|
| KO-001 Overhaul | Pillar, FAQ, Local SEO | 5+ |
| KO-002 Semi Overhaul | Comparison, FAQ, Service | 4+ |
| KO-003 Ring Piston | Tanda Overhaul, Compression, FAQ | 6+ |
| KO-004 Valve Seal | Semi Overhaul, FAQ, Diagnosis | 5+ |
| KO-005 Head Gasket | Semi Overhaul, Overheat, FAQ | 5+ |
| KO-006 Leak Down | Compression Article, FAQ | 3+ |
| KO-007 Compression | All diagnostic articles | 8+ |
| KO-008 Endoscope | Overhaul Process, FAQ | 3+ |
| KO-009 Turun Mesin | Process, FAQ, Local SEO | 4+ |

---

Generated by: Claude Code
Date: 2026-07-10
Rule: R5 (Knowledge Objects), R9 (Content Reuse)
