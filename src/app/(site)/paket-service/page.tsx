/**
 * Paket Service Archive Page — Bengkel Wiguna
 * Template: Shop Two with filters
 */

import PaketServiceArchiveClient from './PaketServiceArchiveClient'
import { getAllPaketService } from '@/lib/wordpress'

export const revalidate = 43200

export const metadata = {
  title: 'Paket Service | Bengkel Wiguna',
  description: 'Paket lengkap untuk kebutuhan spesifik kendaraan Anda. Ganti oli, service AC, spooring, dan lainnya.',
}

export default async function PaketServicePage() {
  const pakets = await getAllPaketService()
  const paketList = Array.isArray(pakets) ? pakets : []

  return (
    <PaketServiceArchiveClient pakets={paketList} />
  )
}