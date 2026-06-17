'use client';

/**
 * Global Analytics Tracker
 * Captures all tracking events from data-track attributes
 * Place in layout.tsx or ClientProviders
 */

import { useEffect } from 'react';
import {
  trackWhatsAppClick,
  trackFormSubmit,
  trackCTAClick,
  trackPromoClick,
  trackPhoneClick,
} from '@/lib/analytics';

interface TrackConfig {
  selector: string;
  eventType: string;
  handler: (element: HTMLElement) => void;
}

const TRACK_CONFIGS: TrackConfig[] = [
  // WhatsApp clicks
  {
    selector: '[data-track="whatsapp"]',
    eventType: 'click',
    handler: (el) => {
      const source = el.getAttribute('data-source') || 'unknown';
      trackWhatsAppClick(source);
    },
  },
  // Also track links containing wa.me
  {
    selector: 'a[href*="wa.me"], a[href*="whatsapp"]',
    eventType: 'click',
    handler: (el) => {
      const source = el.getAttribute('data-source') || el.getAttribute('href') || 'unknown';
      trackWhatsAppClick(source);
    },
  },
  // Form submissions
  {
    selector: 'form[data-track]',
    eventType: 'submit',
    handler: (el) => {
      const formName = el.getAttribute('data-track') || 'unknown';
      trackFormSubmit(formName, true);
    },
  },
  // CTA buttons
  {
    selector: '[data-track="cta"]',
    eventType: 'click',
    handler: (el) => {
      const ctaName = el.getAttribute('data-cta') || 'unknown';
      const location = el.getAttribute('data-location') || 'unknown';
      trackCTAClick(ctaName, location);
    },
  },
  // Promo clicks
  {
    selector: '[data-track="promo"]',
    eventType: 'click',
    handler: (el) => {
      const promoName = el.getAttribute('data-promo-name') || 'unknown';
      const promoId = el.getAttribute('data-promo-id') || 'unknown';
      trackPromoClick(promoName, promoId);
    },
  },
  // Phone clicks
  {
    selector: '[data-track="phone"]',
    eventType: 'click',
    handler: (el) => {
      const phone = el.getAttribute('data-phone') || el.textContent || 'unknown';
      const source = el.getAttribute('data-source') || 'unknown';
      trackPhoneClick(phone, source);
    },
  },
];

export default function GlobalAnalyticsTracker() {
  useEffect(() => {
    const handleEvent = (event: Event) => {
      const target = event.target as HTMLElement;
      if (!target) return;

      // Find matching element up the DOM tree
      const matchConfig = TRACK_CONFIGS.find((config) => {
        const element =
          target.closest(config.selector) ||
          (target.matches(config.selector) ? target : null);
        return element;
      });

      if (matchConfig) {
        const element = (
          target.closest(matchConfig.selector) ||
          (target.matches(matchConfig.selector) ? target : null)
        ) as HTMLElement | null;

        if (element) {
          matchConfig.handler(element);
        }
      }
    };

    // Attach listeners
    const eventTypes = [...new Set(TRACK_CONFIGS.map((c) => c.eventType))];
    eventTypes.forEach((eventType) => {
      document.addEventListener(eventType, handleEvent, true);
    });

    // Cleanup
    return () => {
      eventTypes.forEach((eventType) => {
        document.removeEventListener(eventType, handleEvent, true);
      });
    };
  }, []);

  // This component renders nothing
  return null;
}
