/**
 * Utilities for interacting with Contact Form 7 (CF7) REST API
 * Enriched with Type Definitions and Form Schemas for Bengkel Wiguna.
 */

export interface CF7Response {
  contact_form_id: number;
  status: 'mail_sent' | 'validation_failed' | 'mail_failed' | 'spam';
  message: string;
  invalid_fields?: Array<{
    field: string;
    message: string;
    idref: string;
    error_id: string;
  }>;
}

/**
 * Known Contact Form 7 IDs based on environment/WordPress setup.
 * Update these IDs to match your production CF7 shortcodes.
 */
export const CF7_FORMS = {
  NEWSLETTER: process.env.NEXT_PUBLIC_CF7_NEWSLETTER_ID || '123',
  MAIN_CONTACT: process.env.NEXT_PUBLIC_CF7_MAIN_CONTACT_ID || '124',
  BOOKING_SERVICE: process.env.NEXT_PUBLIC_CF7_BOOKING_ID || '5ca70cf',
};

/**
 * Mengirimkan data form ke Contact Form 7 REST API.
 * 
 * @param formId ID form dari Contact Form 7 di WordPress
 * @param formData Instance FormData yang berisi input user
 */
export async function submitContactForm(formId: string | number, formData: FormData): Promise<CF7Response> {
  const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://backend.bengkelwiguna.com';
  const url = `${WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

  try {
    // Timeout controller (15s limit for SMTP sending compensation)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      cache: 'no-store', // Crucial: Form submissions must never be cached
      signal: controller.signal,
      // Note: We do NOT set 'Content-Type': 'multipart/form-data'. 
      // The browser/fetch API will automatically set the correct boundary when passing FormData.
    });

    clearTimeout(timeoutId);

    // CF7 responds with HTTP 400 for validation errors (e.g., invalid email format)
    // We parse this successfully as a valid workflow state, rather than throwing an Error.
    if (response.status === 400 || response.ok) {
      const data = await response.json();
      return data as CF7Response;
    }

    console.error(`[CF7] Backend returned HTTP ${response.status} for form ${formId}`);
    return {
      contact_form_id: Number(formId),
      status: 'mail_failed',
      message: 'Server sedang sibuk, gagal mengirim pesan.'
    };
    
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
       return {
        contact_form_id: Number(formId),
        status: 'mail_failed',
        message: 'Koneksi terputus. Waktu pengiriman habis.'
      };
    }
    
    console.error(`[CF7] Network/Fetch Error pada form submission ${formId}`);
    return {
      contact_form_id: Number(formId),
      status: 'mail_failed',
      message: 'Terjadi kesalahan pada jaringan. Periksa koneksi internet Anda.'
    };
  }
}
