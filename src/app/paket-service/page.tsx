/**
 * Paket Service Archive Page — Bengkel Wiguna
 * Template: Shop Two with filters
 */

import Header from '@/components/layout/Header'
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
    <>
      <Header
        position="fixed"
        bgColor="bg-[#050b14]/80 backdrop-blur-xl border-b border-white/10"
        theme="header-dark"
      />
      <PaketServiceArchiveClient pakets={paketList} />
    </>
  )
}