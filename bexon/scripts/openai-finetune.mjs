#!/usr/bin/env node
/**
 * OpenAI Fine-tuning Script - Bengkel Wiguna
 * 
 * Alur:
 * 1. Validasi dataset JSONL
 * 2. Upload file ke OpenAI
 * 3. Mulai fine-tuning job
 * 4. Monitor progress
 * 
 * Jalankan: node scripts/openai-finetune.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ============================================
// KONFIGURASI
// ============================================

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const DATASET_FILE = path.join(__dirname, 'openai-dataset.jsonl');
const BASE_MODEL = 'gpt-4o-mini-2024-07-18'; // Model yang akan di-fine-tune (hemat biaya)
// Alternatif: 'gpt-3.5-turbo' untuk lebih hemat, 'gpt-4o-2024-08-06' untuk paling canggih

if (!OPENAI_API_KEY) {
  console.error('❌ ERROR: OPENAI_API_KEY tidak ditemukan!');
  console.error('   Pastikan ada di file .env.local: OPENAI_API_KEY=sk-...');
  process.exit(1);
}

// ============================================
// STEP 1: VALIDASI DATASET
// ============================================

function validateDataset() {
  console.log('\n📋 STEP 1: Validasi Dataset...');
  
  if (!fs.existsSync(DATASET_FILE)) {
    console.error(`❌ File tidak ditemukan: ${DATASET_FILE}`);
    process.exit(1);
  }

  const lines = fs.readFileSync(DATASET_FILE, 'utf-8')
    .split('\n')
    .filter(line => line.trim());

  let errors = [];
  let valid = 0;

  lines.forEach((line, idx) => {
    try {
      const obj = JSON.parse(line);
      
      // Validasi struktur
      if (!obj.messages || !Array.isArray(obj.messages)) {
        errors.push(`Baris ${idx + 1}: Tidak ada field 'messages'`);
        return;
      }
      
      const roles = obj.messages.map(m => m.role);
      if (!roles.includes('system')) {
        errors.push(`Baris ${idx + 1}: Tidak ada role 'system'`);
        return;
      }
      if (!roles.includes('user')) {
        errors.push(`Baris ${idx + 1}: Tidak ada role 'user'`);
        return;
      }
      if (!roles.includes('assistant')) {
        errors.push(`Baris ${idx + 1}: Tidak ada role 'assistant'`);
        return;
      }

      // Validasi setiap message punya 'content'
      const missingContent = obj.messages.find(m => !m.content);
      if (missingContent) {
        errors.push(`Baris ${idx + 1}: Ada message tanpa 'content'`);
        return;
      }

      valid++;
    } catch (e) {
      errors.push(`Baris ${idx + 1}: JSON tidak valid - ${e.message}`);
    }
  });

  if (errors.length > 0) {
    console.error('❌ Dataset ada error:');
    errors.forEach(e => console.error(`   - ${e}`));
    process.exit(1);
  }

  // OpenAI requires minimum 10 examples
  if (valid < 10) {
    console.warn(`⚠️  WARNING: Dataset hanya ${valid} contoh. OpenAI membutuhkan minimal 10.`);
  }

  console.log(`✅ Dataset valid: ${valid} contoh percakapan`);
  return valid;
}

// ============================================
// STEP 2: UPLOAD FILE KE OPENAI
// ============================================

async function uploadFile() {
  console.log('\n📤 STEP 2: Upload dataset ke OpenAI...');

  const FormData = (await import('node:form-data')).default;
  const form = new FormData();
  
  form.append('file', fs.createReadStream(DATASET_FILE), {
    filename: 'bengkel-wiguna-dataset.jsonl',
    contentType: 'application/json',
  });
  form.append('purpose', 'fine-tune');

  const response = await fetch('https://api.openai.com/v1/files', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      ...form.getHeaders(),
    },
    body: form,
  });

  if (!response.ok) {
    const err = await response.json();
    console.error('❌ Upload gagal:', JSON.stringify(err, null, 2));
    process.exit(1);
  }

  const data = await response.json();
  console.log(`✅ File berhasil diupload!`);
  console.log(`   File ID: ${data.id}`);
  console.log(`   Nama   : ${data.filename}`);
  console.log(`   Ukuran : ${(data.bytes / 1024).toFixed(1)} KB`);
  console.log(`   Status : ${data.status}`);

  return data.id;
}

// ============================================
// STEP 3: MULAI FINE-TUNING JOB
// ============================================

async function startFineTuning(fileId) {
  console.log('\n🚀 STEP 3: Mulai Fine-tuning Job...');
  
  const body = {
    training_file: fileId,
    model: BASE_MODEL,
    suffix: 'bengkel-wiguna',  // Nama suffix untuk model hasil
    hyperparameters: {
      n_epochs: 'auto',        // Biarkan OpenAI otomatis menentukan epoch
    },
  };

  const response = await fetch('https://api.openai.com/v1/fine_tuning/jobs', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const err = await response.json();
    console.error('❌ Fine-tuning gagal dimulai:', JSON.stringify(err, null, 2));
    process.exit(1);
  }

  const job = await response.json();
  
  console.log(`✅ Fine-tuning Job berhasil dibuat!`);
  console.log(`   Job ID     : ${job.id}`);
  console.log(`   Status     : ${job.status}`);
  console.log(`   Base Model : ${job.model}`);
  console.log(`   Dibuat     : ${new Date(job.created_at * 1000).toLocaleString('id-ID')}`);
  console.log(`\n⏳ Proses fine-tuning biasanya memakan waktu 10–60 menit.`);
  console.log(`   Kamu akan mendapat email dari OpenAI saat selesai.`);
  
  // Simpan Job ID ke file untuk referensi
  const jobInfo = {
    jobId: job.id,
    fileId: fileId,
    status: job.status,
    model: job.model,
    suffix: 'bengkel-wiguna',
    createdAt: new Date().toISOString(),
  };
  
  fs.writeFileSync(
    path.join(__dirname, 'finetune-job.json'),
    JSON.stringify(jobInfo, null, 2)
  );
  console.log(`\n💾 Info job disimpan di: scripts/finetune-job.json`);

  return job.id;
}

// ============================================
// STEP 4: CEK STATUS JOB
// ============================================

async function checkStatus(jobId) {
  console.log(`\n🔍 STEP 4: Cek status job ${jobId}...`);

  const response = await fetch(`https://api.openai.com/v1/fine_tuning/jobs/${jobId}`, {
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
  });

  const job = await response.json();

  console.log(`\n📊 Status Fine-tuning:`);
  console.log(`   Status       : ${job.status}`);
  console.log(`   Model Hasil  : ${job.fine_tuned_model || '(belum selesai)'}`);
  console.log(`   Trained Tokens: ${job.trained_tokens || 0}`);
  
  if (job.status === 'succeeded') {
    console.log(`\n🎉 SELESAI! Model fine-tuned kamu:`);
    console.log(`   ${job.fine_tuned_model}`);
    console.log(`\n📝 Update file .env.local dengan:`);
    console.log(`   OPENAI_MODEL=${job.fine_tuned_model}`);
    
    // Update finetune-job.json
    const jobInfo = JSON.parse(fs.readFileSync(path.join(__dirname, 'finetune-job.json'), 'utf-8'));
    jobInfo.status = 'succeeded';
    jobInfo.fineTunedModel = job.fine_tuned_model;
    jobInfo.completedAt = new Date().toISOString();
    fs.writeFileSync(path.join(__dirname, 'finetune-job.json'), JSON.stringify(jobInfo, null, 2));
  } else if (job.status === 'failed') {
    console.error(`\n❌ Fine-tuning GAGAL:`);
    console.error(job.error);
  }

  return job;
}

// ============================================
// MAIN FUNCTION
// ============================================

async function main() {
  console.log('==========================================');
  console.log(' OpenAI Fine-tuning - Bengkel Wiguna AI');
  console.log('==========================================');

  const args = process.argv.slice(2);

  // Mode: hanya cek status (jika sudah punya Job ID)
  if (args[0] === '--status') {
    const jobId = args[1];
    if (!jobId) {
      // Baca dari file
      try {
        const jobInfo = JSON.parse(fs.readFileSync(path.join(__dirname, 'finetune-job.json'), 'utf-8'));
        await checkStatus(jobInfo.jobId);
      } catch {
        console.error('❌ Tidak ada job ID. Jalankan dulu tanpa --status');
      }
    } else {
      await checkStatus(jobId);
    }
    return;
  }

  // Mode: full fine-tuning
  try {
    // Step 1: Validasi
    validateDataset();

    // Step 2: Upload
    const fileId = await uploadFile();

    // Tunggu sebentar agar file diproses
    console.log('\n⏳ Menunggu file diproses (30 detik)...');
    await new Promise(r => setTimeout(r, 30000));

    // Step 3: Mulai fine-tuning
    const jobId = await startFineTuning(fileId);

    console.log('\n==========================================');
    console.log(' FINE-TUNING DIMULAI! ');
    console.log('==========================================');
    console.log(`\n📋 Perintah untuk cek status:`);
    console.log(`   node scripts/openai-finetune.mjs --status ${jobId}`);
    console.log(`\n   Atau cek di: https://platform.openai.com/fine-tuning`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();
