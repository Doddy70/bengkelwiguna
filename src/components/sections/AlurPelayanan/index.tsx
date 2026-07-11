"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone, Calendar, ClipboardList, Search, MessageCircle, Wrench, ShieldCheck, CreditCard, Car } from "lucide-react"
import { AlurCard } from "./AlurCard"
import { alurPelayananSteps, alurPelayananMeta } from "./data"
import styles from "./AlurPelayanan.module.css"

// Icon mapping
const iconMap: Record<string, any> = {
  Phone,
  Calendar,
  ClipboardList,
  Search,
  MessageCircle,
  Wrench,
  ShieldCheck,
  CreditCard,
  Car,
}

export function AlurPelayanan() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredDot, setHoveredDot] = useState<number | null>(null)
  const [isDark, setIsDark] = useState(false)

  const totalSteps = alurPelayananSteps.length
  const currentStep = alurPelayananSteps[activeIndex]

  // Detect dark mode
  useEffect(() => {
    // Check initial dark mode
    const checkDarkMode = () => {
      const dark = document.documentElement.classList.contains('dark')
      setIsDark(dark)
    }

    checkDarkMode()

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode()
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])

  // Navigation
  const goTo = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, totalSteps - 1)))
  }

  const next = () => goTo(activeIndex + 1)
  const prev = () => goTo(activeIndex - 1)

  // Calculate progress for dots
  const progressPercent = ((activeIndex + 1) / totalSteps) * 100

  // WhatsApp CTA link
  const whatsappUrl = `https://wa.me/${alurPelayananMeta.cta.whatsapp}?text=${encodeURIComponent(alurPelayananMeta.cta.message)}`

  // Get icon for current step
  const CurrentIcon = iconMap[currentStep?.icon] || Phone

  return (
    <section className={`${styles.container} ${isDark ? 'dark' : ''}`} id="alur-pelayanan">
      {/* Liquid Glass SVG Filter - Apple-inspired distortion */}
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
      >
        <defs>
          <filter id="liquid-glass-filter" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.028 0.028"
              numOctaves="2"
              seed="92"
              result="noise"
            />
            <feGaussianBlur
              in="noise"
              stdDeviation="2"
              result="blurred"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="130"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Background Pattern - Clean, transparent */}
      <div className={styles.backgroundPattern} />

      {/* 2-Column Layout */}
      <div className={styles.layout}>
        {/* Left Column - Title & Info */}
        <div className={styles.leftColumn}>
          <div className={styles.header}>
            <h2
              className={styles.title}
              style={{ color: isDark ? '#60a5fa' : '#224297' }}
            >
              {alurPelayananMeta.title}
            </h2>
            <p
              className={styles.subtitle}
              style={{ color: isDark ? '#94a3b8' : '#64748b' }}
            >
              {alurPelayananMeta.subtitle}
            </p>
          </div>

          {/* Current Step Info */}
          <div
            className={styles.stepInfo}
            key={`step-info-${activeIndex}`}
          >
            <div className={styles.stepInfoTitle}>
              Step
            </div>

            {/* Frame Title */}
            {currentStep?.frameTitle && (
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: isDark ? '#94a3b8' : '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
                padding: '4px 10px',
                backgroundColor: isDark ? 'rgba(51, 65, 85, 0.5)' : 'rgba(226, 232, 240, 0.6)',
                borderRadius: '6px',
                display: 'inline-block',
              }}>
                {currentStep.frameTitle}
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: currentStep?.color === '#ffd900' ? 'rgba(255, 217, 0, 0.15)' : isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(34, 66, 151, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${currentStep?.color === '#ffd900' ? 'rgba(255, 217, 0, 0.3)' : isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(34, 66, 151, 0.2)'}`,
              }}>
                <CurrentIcon size={20} color={currentStep?.color === '#ffd900' ? '#b8860b' : isDark ? '#60a5fa' : '#224297'} />
              </div>
              <span style={{ fontSize: '1.125rem', fontWeight: 600, color: isDark ? '#f1f5f9' : '#1e293b' }}>
                {currentStep?.title}
              </span>
            </div>

            {/* Description as Bullet List */}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {currentStep?.description?.map((item, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '0.875rem',
                  color: isDark ? '#cbd5e1' : '#475569',
                  marginBottom: '6px',
                  lineHeight: 1.4,
                }}>
                  <span style={{
                    flexShrink: 0,
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: currentStep?.color === '#ffd900' ? '#ffd900' : isDark ? '#60a5fa' : '#224297',
                    marginTop: '6px',
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Progress Text */}
          <div
            className={styles.animateProgress}
          >
            <div style={{ fontSize: '0.875rem', color: isDark ? '#94a3b8' : '#64748b', marginBottom: '8px' }}>
              Progress Servis
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                flex: 1,
                height: '8px',
                background: isDark ? 'rgba(51, 65, 85, 0.5)' : 'rgba(226, 232, 240, 0.8)',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div
                  style={{
                    height: '100%',
                    width: `${progressPercent}%`,
                    background: isDark
                      ? 'linear-gradient(90deg, #3b82f6 0%, #ffd900 100%)'
                      : 'linear-gradient(90deg, #224297 0%, #ffd900 100%)',
                    borderRadius: '4px',
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: isDark ? '#60a5fa' : '#224297' }}>
                {Math.round(progressPercent)}%
              </span>
            </div>
          </div>

          {/* CTA Section - Bottom of Left Column */}
          <div className={styles.animateCta}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {alurPelayananMeta.cta.text}
            </a>
          </div>
        </div>

        {/* Right Column - Carousel */}
        <div className={styles.rightColumn}>
          {/* Carousel Container */}
          <div className={styles.carouselContainer}>
            {/* Navigation Arrows */}
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className={`${styles.navArrow} ${styles.navPrev}`}
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Card Display */}
            <div className={styles.cardDisplay}>
              <AlurCard
                step={currentStep}
                index={activeIndex}
                isActive={true}
                isDark={isDark}
              />

              {/* Progress indicator */}
              <div className={styles.progressIndicator}>
                <span className={styles.currentStep}>{currentStep?.number}</span>
                <span className={styles.separator}>|</span>
                <span className={styles.totalSteps}>{currentStep?.frameTitle}</span>
              </div>
            </div>

            <button
              onClick={next}
              disabled={activeIndex === totalSteps - 1}
              className={`${styles.navArrow} ${styles.navNext}`}
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dot Navigation with Tooltips */}
          <div className={styles.dotNavigation}>
            {alurPelayananSteps.map((step, index) => (
              <div key={step.id} className={styles.dotWrapper}>
                {/* Tooltip */}
                <div className={`${styles.tooltip} ${hoveredDot === index ? styles.tooltipVisible : ''}`}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: step.color === '#ffd900' ? '#ffd900' : isDark ? '#3b82f6' : '#224297'
                    }} />
                    <span className={styles.tooltipStep}>Langkah {step.number}</span>
                  </div>
                  <span className={styles.tooltipTitle}>{step.title}</span>
                </div>

                {/* Dot Button */}
                <button
                  onClick={() => goTo(index)}
                  onMouseEnter={() => setHoveredDot(index)}
                  onMouseLeave={() => setHoveredDot(null)}
                  className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''} ${step.color === '#ffd900' ? styles.dotGold : ''}`}
                  aria-label={`Go to ${step.title}`}
                >
                  {index === activeIndex && (
                    <span className={styles.dotPulse} />
                  )}
                </button>
              </div>
            ))}

            {/* Progress Line Background */}
            <div className={styles.progressLine}>
              <div
                className={styles.progressFill}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlurPelayanan
