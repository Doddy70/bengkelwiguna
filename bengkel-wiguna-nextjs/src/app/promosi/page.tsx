/**
 * Promosi Archive Page — Bengkel Wiguna
 * Template: Shop Two with filters
 */

import Header from '@/components/layout/Header'
import PromosiArchiveClient from './PromosiArchiveClient'
import { getAllPromosi } from '@/lib/wordpress'

export const revalidate = 60

export const metadata = {
  title: 'Promosi Spesial | Bengkel Wiguna',
  description: 'Dapatkan promo dan diskon menarik untuk perawatan kendaraan Anda. Hemat hingga 20%.',
}

export default async function PromosiPage() {
  const promosi = await getAllPromosi()
  const promosiList = Array.isArray(promosi) ? promosi : []

  return (
    <>
      <Header
        position="fixed"
        bgColor="bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-lg"
        theme="header-light"
      />
      <PromosiArchiveClient promos={promosiList} />
    </>
  )
}