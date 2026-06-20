# Panduan Handoff Agent — Bengkel Wiguna V3

> **Untuk:** Semua agent (Gemini, Claude, Copilot, Cursor, dsb)  
> **Tujuan:** Memastikan setiap agent baru bisa langsung produktif tanpa kehilangan konteks

---

## 🎯 Apa itu Agent Handoff?

Handoff adalah proses **transfer konteks kerja** dari satu agent ke agent lain, termasuk:
- State proyek saat ini (apa yang sudah selesai, apa yang pending)
- Keputusan arsitektur yang sudah dibuat
- Kesalahan yang sudah pernah terjadi (agar tidak terulang)
- Task berikutnya yang harus dikerjakan
- File kritis yang harus dibaca sebelum mulai

---

## 📋 Komponen Handoff yang Wajib Ada

### 1. `AGENT_SYNC.md` — Single Source of Truth
File utama yang SELALU dibaca pertama oleh agent baru.  
**Wajib diupdate setiap sesi selesai.**

Berisi:
- Versi & tanggal update
- Tech stack aktif
- Task progress terkini  
- Known incidents & anti-pattern
- Quick start 5 langkah

### 2. `.claude/state.json` — Machine-Readable State
File JSON yang berisi state proyek yang bisa dibaca program/agent secara otomatis.

**Format:**
```json
{
  "project": "nama-proyek",
  "version": "x.y.z",
  "lastUpdated": "ISO-8601",
  "lastAgent": {
    "name": "Nama Model Agent",
    "action": "Deskripsi singkat apa yang dikerjakan terakhir"
  },
  "lastCommit": {
    "hash": "git commit hash",
    "message": "commit message",
    "branch": "nama branch"
  },
  "workflow": {
    "currentPhase": "NAMA_FASE",
    "activeTasks": [],
    "completedTasks": [],
    "pendingTasks": []
  },
  "incidentLog": []
}
```

### 3. `.claude/tasks.md` — Human-Readable Task List
Daftar task dengan status, prioritas, dan file yang terlibat.

### 4. `.agents/skills/` — Institutional Knowledge
Skill files berisi panduan spesifik yang sudah teruji (dan terbukti gagal kalau diabaikan).

### 5. `conductor/` — CDD Artifacts
Dokumen product, tech stack, workflow, dan patterns yang menjadi referensi arsitektur.

---

## 🔄 Workflow Handoff: Cara yang Benar

### Saat MENGAKHIRI Sesi (Agent yang Keluar)

```bash
# Step 1: Commit semua perubahan
git add -A
git commit -am "type(scope): deskripsi pekerjaan yang diselesaikan"

# Step 2: Catat state terkini di .claude/state.json
# (Update field lastAgent, lastCommit, workflow)

# Step 3: Update .claude/tasks.md
# Tandai task yang selesai, tambahkan task baru yang ditemukan

# Step 4: Update AGENT_SYNC.md jika ada temuan penting
# Tambahkan ke Known Incidents jika ada kegagalan

# Step 5: Push ke remote
git push origin main (atau branch aktif)
```

### Saat MEMULAI Sesi (Agent yang Masuk)

```bash
# Step 1: Pull latest dari remote
git pull origin main

# Step 2: Baca file-file ini SECARA BERURUTAN (jangan skip):
cat AGENT_SYNC.md          # Situasi umum + known issues
cat .claude/state.json     # State terakhir (machine-readable)
cat .claude/tasks.md       # Task yang pending
cat .claude/CLAUDE.md      # Konvensi coding

# Step 3: Baca skill yang relevan
# Jika mengerjakan ModernEquipment:
cat .agents/skills/hotspot-ui-implementation/SKILL.md

# Step 4: Konfirmasi dengan user sebelum mulai
# "Saya sudah membaca state proyek. Task berikutnya adalah X. Apakah saya bisa mulai?"
```

---

## 📝 Template: Update `state.json` Setelah Sesi

Salin dan update bagian ini di `.claude/state.json`:

```json
{
  "lastUpdated": "[TANGGAL ISO-8601]",
  "lastAgent": {
    "name": "[NAMA MODEL: misal 'Claude Sonnet 4.6', 'Gemini 2.5 Pro']",
    "action": "[KALIMAT SINGKAT: apa yang dikerjakan dan apa hasilnya]"
  },
  "lastCommit": {
    "hash": "[7 karakter pertama git log --oneline HEAD | head -1]",
    "message": "[commit message terakhir]",
    "branch": "[git branch --show-current]"
  },
  "workflow": {
    "currentPhase": "[FASE AKTIF]",
    "activeTasks": ["[task yang sedang dikerjakan, kosong jika selesai]"],
    "completedTasks": ["[tambahkan task yang baru diselesaikan]"],
    "pendingTasks": ["[task yang belum dikerjakan]"]
  }
}
```

---

## 🚨 Template: Menambah Incident ke `AGENT_SYNC.md`

Jika ada kegagalan, tambahkan ke section `## 🚨 KNOWN INCIDENTS`:

```markdown
### Insiden: [Judul Singkat] — [Tanggal]

**Apa yang terjadi:** [Deskripsi 1-2 kalimat]

#### ❌ Anti-Pattern
```tsx
// ❌ SALAH
kode yang menyebabkan error

// ✅ BENAR  
kode yang benar
```

**Root Cause:** [Penjelasan teknis]  
**Skill panduan:** `.agents/skills/[nama-skill]/SKILL.md`
```

---

## 🤖 Handoff Antar Domain/Workspace

Jika agent baru berasal dari **IDE atau workspace berbeda** (misal: dari Antigravity IDE ke Cursor, atau dari local ke cloud agent), ikuti langkah tambahan:

### Langkah 1: Pastikan Remote Repo Ter-update
```bash
# Di workspace lama:
git push origin main --tags

# Di workspace baru:
git clone https://github.com/Doddy70/bengkelwiguna.git
# atau jika sudah ada:
git fetch origin && git reset --hard origin/main
```

### Langkah 2: Setup Environment
```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local dengan nilai yang benar:
# NEXT_PUBLIC_WORDPRESS_URL=https://backend.bengkelwiguna.com

# Verifikasi dev server berjalan
npm run dev
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/
# Harus: 200
```

### Langkah 3: Baca Urutan File ini
```
1. AGENT_SYNC.md                          ← Wajib pertama
2. .claude/state.json                     ← State terkini  
3. .claude/tasks.md                       ← Task pending
4. .claude/CLAUDE.md                      ← Konvensi
5. conductor/tech-stack.md                ← Arsitektur
6. .agents/skills/[skill-relevan]/SKILL.md ← Panduan spesifik
```

### Langkah 4: Konfirmasi ke User
Sebelum mulai coding apapun, agent WAJIB konfirmasi:
> "Saya sudah membaca semua context. State terakhir: [X]. Task berikutnya: [Y]. File yang akan diubah: [Z]. Boleh saya mulai?"

---

## 📊 Matriks Handoff per Jenis Task

| Jenis Task | File Wajib Dibaca | Skill Relevan |
|-----------|-------------------|---------------|
| UI/UX komponen baru | `AGENT_SYNC.md`, `conductor/tech-stack.md` | `frontend-design`, `hotspot-ui-implementation` |
| Hotspot ModernEquipment | `AGENT_SYNC.md` § Known Incidents | `hotspot-ui-implementation` ⚠️ WAJIB |
| API/WordPress | `conductor/api-reference.md` | `wp-rest-api`, `headless-api-design` |
| SEO | `conductor/product.md` | `seo-geo`, `schema-markup` |
| Performance | `conductor/tech-stack.md` | `audit-speed`, `core-web-vitals` |
| Deployment | `AGENT_SYNC.md` | `deploy-to-vercel` |

---

## ✅ Checklist Handoff (Simpan sebagai Referensi)

### Sebelum Meninggalkan Sesi
- [ ] Semua perubahan sudah di-commit dengan pesan yang deskriptif
- [ ] `.claude/state.json` sudah diupdate (lastAgent, lastCommit, workflow)
- [ ] `.claude/tasks.md` sudah diupdate (status task)
- [ ] `AGENT_SYNC.md` diupdate jika ada temuan/insiden baru
- [ ] Jika ada kegagalan, skill baru dibuat di `.agents/skills/`
- [ ] Git push ke remote sudah dilakukan

### Saat Memulai Sesi Baru
- [ ] `git pull origin main` sudah dijalankan
- [ ] `AGENT_SYNC.md` sudah dibaca (terutama § Known Incidents)
- [ ] `.claude/state.json` sudah dibaca
- [ ] `.claude/tasks.md` sudah dibaca
- [ ] Skill yang relevan sudah dibaca
- [ ] Konfirmasi dengan user sebelum mulai implementasi
