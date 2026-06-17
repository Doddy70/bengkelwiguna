/**
 * Meta & Google Analytics Tracking Utilities
 * Bengkel Wiguna - Event Tracking for WhatsApp & Forms
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track WhatsApp Click
 * Call this on WhatsApp link click
 */
export function trackWhatsAppClick(source: string = 'unknown'): void {
  // Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'click_whatsapp', {
      event_category: 'engagement',
      event_label: source,
      source: source,
    });
  }

  // Meta Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {
      content_name: 'WhatsApp Click',
      content_category: source,
    });
  }

  // Debug log (development only)
  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] WhatsApp Click:', { source });
  }
}

/**
 * Track Form Submission
 */
export function trackFormSubmit(formName: string, success: boolean = true): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', success ? 'submit_form' : 'form_error', {
      event_category: 'conversion',
      event_label: formName,
      form_name: formName,
    });
  }

  if (typeof window.fbq === 'function') {
    window.fbq('track', success ? 'Lead' : 'Contact', {
      content_name: formName,
      status: success ? 'success' : 'error',
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] Form Submit:', { formName, success });
  }
}

/**
 * Track CTA Click
 */
export function trackCTAClick(ctaName: string, location: string): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'click_cta', {
      event_category: 'engagement',
      event_label: ctaName,
      cta_name: ctaName,
      location: location,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] CTA Click:', { ctaName, location });
  }
}

/**
 * Track Page View (for SPA navigation)
 */
export function trackPageView(pagePath: string, pageTitle: string): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] Page View:', { pagePath, pageTitle });
  }
}

/**
 * Track Promo Click
 */
export function trackPromoClick(promoName: string, promoId: string): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'select_content', {
      content_type: 'promotion',
      item_id: promoId,
      item_name: promoName,
    });
  }

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'ViewContent', {
      content_name: promoName,
      content_ids: [promoId],
      content_type: 'product',
    });
  }
}

/**
 * Track Phone Call
 */
export function trackPhoneClick(phoneNumber: string, source: string = 'unknown'): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'click_phone', {
      event_category: 'engagement',
      event_label: source,
      phone_number: phoneNumber,
    });
  }

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', {
      content_name: 'Phone Call',
      phone_number: phoneNumber,
    });
  }
}

// Export type for usage
export type TrackingEvent = {
  category: string;
  action: string;
  label?: string;
};
