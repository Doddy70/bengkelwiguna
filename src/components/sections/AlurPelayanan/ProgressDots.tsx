"use client"

import { motion } from "framer-motion"
import type { AlurStep } from "./data"
import styles from "./AlurPelayanan.module.css"

interface ProgressDotsProps {
  steps: AlurStep[]
  activeIndex: number
}

export function ProgressDots({ steps, activeIndex }: ProgressDotsProps) {
  return (
    <div className={styles.progressContainer}>
      {/* SVG Connecting Line */}
      <svg className={styles.progressLine} viewBox="0 0 100 10" preserveAspectRatio="none">
        {/* Background Line */}
        <line
          x1="5"
          y1="5"
          x2="95"
          y2="5"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          className={styles.lineBackground}
        />
        {/* Animated Progress Line */}
        <motion.line
          x1="5"
          y1="5"
          x2="95"
          y2="5"
          stroke="url(#lineGradient)"
          strokeWidth="0.5"
          strokeDasharray="100"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className={styles.lineProgress}
        />
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#224297" />
            <stop offset="100%" stopColor="#ffd900" />
          </linearGradient>
        </defs>
      </svg>

      {/* Dots */}
      {steps.map((step, index) => {
        const isActive = index <= activeIndex
        const isHighlight = step.color === "#ffd900"
        const position = (index / (steps.length - 1)) * 90 + 5 // 5% to 95%

        return (
          <motion.div
            key={step.id}
            className={`${styles.dot} ${isActive ? styles.dotActive : ""} ${
              isHighlight ? styles.dotHighlight : ""
            }`}
            style={{ left: `${position}%` }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              type: "spring",
              stiffness: 200,
            }}
          >
            {/* Outer Ring */}
            <span className={styles.dotRing} />
            {/* Inner Dot */}
            <span className={styles.dotInner} />
            {/* Pulse Effect for Active */}
            {isActive && (
              <motion.span
                className={styles.dotPulse}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

export default ProgressDots
