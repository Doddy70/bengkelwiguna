"use client"

import { AlurStep } from "./data"
import styles from "./AlurPelayanan.module.css"

interface AlurCardProps {
  step: AlurStep
  index: number
  isActive: boolean
  isDark?: boolean
}

export function AlurCard({ step, index, isActive, isDark = false }: AlurCardProps) {
  const isHighlight = step.color === "#ffd900"
  const isGold = step.color === "#ffd900" || isHighlight

  // Determine media type
  const hasVideo = step.video && (step.video.endsWith(".mp4") || step.video.endsWith(".webm"))
  const hasImage = step.image && !hasVideo

  return (
    <div
      className={`${styles.liquidCard} ${isHighlight ? styles.liquidHighlight : ""} ${styles.animateCard}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Liquid Glass Layers */}
      <div className={styles.liquidBase} />
      <div className={styles.liquidReflection} />
      <div className={styles.liquidHighlight} />

      {/* Glow Effect */}
      <div className={styles.liquidGlow} />

      {/* Top Accent Border - Liquid Glass Edge */}
      <div className={`${styles.liquidEdge} ${isGold ? styles.liquidEdgeGold : ""}`} />

      {/* Media Container */}
      <div className={styles.mediaContainer}>
        {hasVideo ? (
          <video
            className={styles.liquidMedia}
            src={step.video}
            autoPlay
            loop
            muted
            playsInline
            poster={step.image}
          />
        ) : hasImage ? (
          <img
            className={styles.liquidMedia}
            src={step.image}
            alt={step.title}
            loading="lazy"
          />
        ) : (
          <div className={styles.liquidIconBg}>
            <div className={`${styles.liquidIconPlaceholder} ${isGold ? styles.liquidIconGold : ""}`}>
              {step.icon && (
                <span className={styles.liquidIconText}>
                  {step.number}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Overlay Gradient */}
        <div className={styles.liquidOverlay} />
      </div>

      {/* Content */}
      <div className={styles.liquidContent}>
        {/* Step Badge - Liquid Glass Pill */}
        <div className={`${styles.liquidBadge} ${isGold ? styles.liquidBadgeGold : ""}`}>
          <span className={styles.liquidBadgeText}>{step.number}</span>
        </div>

        {/* Frame Title - Scene title for video/image */}
        {step.frameTitle && (
          <div className={styles.frameTitle}>{step.frameTitle}</div>
        )}

        {/* Title - PIC Role */}
        <h3 className={styles.liquidTitle}>{step.title}</h3>

        {/* Description - Bullet List */}
        <ul className={styles.liquidDescriptionList}>
          {step.description.map((item, i) => (
            <li key={i} className={styles.liquidDescriptionItem}>
              <span className={styles.bulletPoint} />
              {item}
            </li>
          ))}
        </ul>

        {/* Interactive Indicator */}
        {isActive && (
          <div className={styles.liquidActiveIndicator} />
        )}
      </div>
    </div>
  )
}

export default AlurCard
