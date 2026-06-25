/**
 * OG Image Generator API Route - Enhanced
 * Generates dynamic Open Graph images for Bengkel Wiguna
 *
 * Usage:
 * - /api/og?title=Service%20Mobil%20Depok
 * - /api/og?title=Tune%20Up%20Promo&page=promosi
 * - /api/og?page=services - Auto-generate based on page type
 * - /api/og?page=blog - Auto-generate based on page type
 */

import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get('title') || 'Bengkel Wiguna'
  const page = searchParams.get('page') || 'default'

  // Brand colors
  const brandBlue = '#224297'
  const brandGold = '#ffd900'
  const darkBlue = '#1a3567'

  // Page-specific configurations with auto-generated content
  const pageConfigs: Record<string, { badge: string; badgeColor: string; title: string; subtitle: string }> = {
    default: {
      badge: 'ONE STOP SERVICE',
      badgeColor: brandGold,
      title: 'Bengkel Wiguna',
      subtitle: 'Service Mobil Terpercaya di Depok Sejak 1990',
    },
    services: {
      badge: '🔧 LAYANAN SERVICE',
      badgeColor: brandGold,
      title: 'Layanan Service Mobil Lengkap',
      subtitle: 'Tune Up • Ganti Oli • Service AC • Spooring',
    },
    blog: {
      badge: '📚 TIPS OTOMOTIF',
      badgeColor: '#4CAF50',
      title: 'Blog & Artikel',
      subtitle: 'Tips Perawatan Kendaraan dari Teknisi Berpengalaman',
    },
    promosi: {
      badge: '🔥 PROMO SPESIAL',
      badgeColor: '#ff4444',
      title: 'Promo & Diskon Service',
      subtitle: 'Hemat hingga 20% untuk Perawatan Kendaraan Anda',
    },
    spesialis: {
      badge: '⚡ TEKNOLOGI MODERN',
      badgeColor: '#00D4AA',
      title: 'Layanan Spesialis',
      subtitle: 'Reset AC Kyoto • Kaki-Kaki • Semi Overhaul',
    },
    paket: {
      badge: '📦 PAKET HEMAT',
      badgeColor: brandGold,
      title: 'Paket Service Mobil',
      subtitle: 'Solusi Lengkap untuk Kebutuhan Kendaraan Anda',
    },
    about: {
      badge: '🏢 TENTANG KAMI',
      badgeColor: brandGold,
      title: 'Tentang Bengkel Wiguna',
      subtitle: 'Cerita, Visi, dan Nilai Kami Sejak 1990',
    },
    contact: {
      badge: '📞 HUBUNGI KAMI',
      badgeColor: '#25D366',
      title: 'Hubungi Bengkel Wiguna',
      subtitle: 'Booking Service • Konsultasi Gratis • WhatsApp 0878-1777-3888',
    },
    lokasi: {
      badge: '📍 LOKASI BENGKEL',
      badgeColor: brandGold,
      title: 'Kunjungi Bengkel Kami',
      subtitle: 'Jl. Margonda No.268, Kemiri Muka, Beji, Depok',
    },
  }

  const config = pageConfigs[page] || pageConfigs.default
  const displayTitle = title !== 'Bengkel Wiguna' ? title : config.title
  const subtitle = title !== 'Bengkel Wiguna' ? config.subtitle : config.subtitle

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: brandBlue,
          backgroundImage: `linear-gradient(135deg, ${brandBlue} 0%, ${darkBlue} 100%)`,
          fontSize: '48px',
          fontWeight: 'bold',
          position: 'relative',
        }}
      >
        {/* Background Pattern - Geometric shapes */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.05,
          }}
        >
          <div
            style={{
              fontSize: '400px',
              fontWeight: '900',
              color: 'white',
            }}
          >
            WG
          </div>
        </div>

        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            backgroundColor: brandGold,
            opacity: 0.1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '5%',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            backgroundColor: brandGold,
            opacity: 0.08,
          }}
        />

        {/* Location Badge - Top Left */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'white',
            fontSize: '18px',
            fontWeight: '500',
            opacity: 0.9,
          }}
        >
          📍 Depok, Jawa Barat
        </div>

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: config.badgeColor,
            color: page === 'promosi' ? 'white' : darkBlue,
            padding: '14px 36px',
            borderRadius: '50px',
            fontSize: '18px',
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            marginBottom: '32px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          {config.badge}
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 60px',
            maxWidth: '1000px',
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: displayTitle.length > 25 ? '52px' : '64px',
              fontWeight: '900',
              lineHeight: 1.1,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            {displayTitle}
          </div>
          <div
            style={{
              color: 'white',
              opacity: 0.85,
              fontSize: '24px',
              fontWeight: '500',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Brand Logo - Bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: brandGold,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: '900',
              color: darkBlue,
            }}
          >
            WG
          </div>
          <div
            style={{
              color: 'white',
              fontSize: '26px',
              fontWeight: '700',
              letterSpacing: '0.05em',
            }}
          >
            BENGKEL WIGUNA
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
