/**
 * Promosi Archive Page — Bengkel Wiguna
 * Template: Shop Two with filters
 */

import PromosiArchiveClient from './PromosiArchiveClient'
import { getAllPromosi, getHomepageSettings } from '@/lib/wordpress'

export const revalidate = 60

export const metadata = {
  title: 'Promosi Spesial | Bengkel Wiguna',
  description: 'Dapatkan promo dan diskon menarik untuk perawatan kendaraan Anda. Hemat hingga 20%.',
}

export default async function PromosiPage() {
  const [promosi, hpSettings] = await Promise.all([
    getAllPromosi(),
    getHomepageSettings()
  ])
  const promosiList = Array.isArray(promosi) ? promosi : []
  const showPromoBulanan = hpSettings?.show_promo_bulanan !== false

  return (
    <PromosiArchiveClient promos={promosiList} showPromoBulanan={showPromoBulanan} />
  )
}