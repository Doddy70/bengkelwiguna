/**
 * Services Archive Page — Bengkel Wiguna
 * Template: Shop Two with filters
 */

import Header from '@/components/layout/Header'
import ServicesArchiveClient from './ServicesArchiveClient'
import { getAllServices } from '@/lib/wordpress'

export const revalidate = 43200

export const metadata = {
  title: 'Layanan Service | Bengkel Wiguna',
  description: 'Pilihan lengkap layanan service dan perawatan kendaraan profesional. Ganti oli, service AC, spooring, tune-up — semua bisa di satu tempat.',
}

export default async function ServicesPage() {
  const services = await getAllServices()
  const servicesList = Array.isArray(services) ? services : []

  return (
    <>
      <Header
        position="fixed"
        bgColor="bg-[#224297]/80 backdrop-blur-xl border-b border-white/10"
        theme="header-dark"
      />
      <ServicesArchiveClient services={servicesList} />
    </>
  )
}