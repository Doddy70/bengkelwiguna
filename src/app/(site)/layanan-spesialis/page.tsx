/**
 * Layanan Spesialis Archive Page — Bengkel Wiguna
 */

import { getAllLayananSpesialis } from '@/lib/wordpress'
import ServicesArchiveClient from '../services/ServicesArchiveClient'

export const revalidate = 43200

export const metadata = {
  title: 'Layanan Spesialis | Bengkel Wiguna',
  description: 'Layanan spesialis dengan teknologi modern: Reset AC Kyoto, Cek Kaki-Kaki Kyoto, dan Semi Overhaul Stinger.',
}

export default async function LayananSpesialisPage() {
  const specialists = await getAllLayananSpesialis()
  const data = Array.isArray(specialists) ? specialists : []

  // Reuse the clean grid layout from ServicesArchiveClient
  return (
    <ServicesArchiveClient services={data} />
  )
}
