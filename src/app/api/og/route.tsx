/**
 * OG Image Generator API Route
 * Generates dynamic Open Graph images for Bengkel Wiguna
 *
 * Usage:
 * - /api/og?title=Service%20Mobil%20Depok
 * - /api/og?title=Service%20Mobil%20Depok&type=service
 * - /api/og?title=Tune%20Up%20Promo&type=promo
 */

import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get('title') || 'Bengkel Wiguna'
  const type = searchParams.get('type') || 'default'

  // Brand colors
  const brandBlue = '#224297'
  const brandGold = '#ffd900'
  const darkBlue = '#1a3567'

  // Type-specific configurations
  const configs = {
    default: {
      badge: 'ONE STOP SERVICE',
      badgeColor: brandGold,
    },
    service: {
      badge: 'LAYANAN PROFESIONAL',
      badgeColor: brandGold,
    },
    promo: {
      badge: 'PROMO SPESIAL',
      badgeColor: '#ff4444',
    },
    blog: {
      badge: 'TIPS OTOMOTIF',
      badgeColor: '#4CAF50',
    },
  }

  const config = configs[type as keyof typeof configs] || configs.default

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
        }}
      >
        {/* Background Pattern */}
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
            opacity: 0.1,
          }}
        >
          <div
            style={{
              fontSize: '400px',
              fontWeight: '900',
              color: 'white',
              opacity: 0.1,
            }}
          >
            WG
          </div>
        </div>

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: config.badgeColor,
            color: type === 'promo' ? 'white' : darkBlue,
            padding: '12px 32px',
            borderRadius: '50px',
            fontSize: '20px',
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            marginBottom: '40px',
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
              fontSize: title.length > 30 ? '52px' : '64px',
              fontWeight: '900',
              lineHeight: 1.1,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
        </div>

        {/* Brand Logo Text */}
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
              fontSize: '28px',
              fontWeight: '700',
              letterSpacing: '0.05em',
            }}
          >
            BENGKEL WIGUNA
          </div>
        </div>

        {/* Location Badge */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '40px',
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
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
