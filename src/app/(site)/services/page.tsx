/**
 * Services Archive Page — Bengkel Wiguna
 * Template: Shop Two with filters
 */

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
    <ServicesArchiveClient services={servicesList} />
  )
}