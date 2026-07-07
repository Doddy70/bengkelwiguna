/**
 * Utilities for interacting with Contact Form 7 (CF7) REST API
 * and FormyChat API for WhatsApp-integrated form submissions.
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

export interface FormyChatResponse {
  success: boolean;
  data?: {
    lead_id?: number;
    message?: string;
  };
  error?: string;
}

/**
 * Known Contact Form 7 / FormyChat IDs based on environment/WordPress setup.
 * FormyChat maps to the same CF7 form ID.
 */
export const CF7_FORMS = {
  NEWSLETTER: process.env.NEXT_PUBLIC_CF7_NEWSLETTER_ID || '123',
  MAIN_CONTACT: process.env.NEXT_PUBLIC_CF7_MAIN_CONTACT_ID || '124',
  BOOKING_SERVICE: process.env.NEXT_PUBLIC_CF7_BOOKING_ID || 'b5abf32',
};

/**
 * Mengirimkan data form ke FormyChat REST API.
 * FormyChat handles CF7 submission + WhatsApp notification internally.
 *
 * @param formId  CF7/FormyChat form ID (slug or numeric)
 * @param formData Key-value pairs of form fields
 */
export async function submitFormyChat(
  formId: string,
  formData: Record<string, string>
): Promise<FormyChatResponse> {
  const WORDPRESS_URL =
    process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://backend.bengkelwiguna.com';
  const url = `${WORDPRESS_URL}/wp-json/formychat/v1/submit-form`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form_id: formId, fields: formData }),
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`[FormyChat] HTTP ${response.status} for form ${formId}`);
      return { success: false, error: 'Gagal mengirim data. Silakan coba lagi.' };
    }

    const data = await response.json();
    return data as FormyChatResponse;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return { success: false, error: 'Koneksi terputus. Waktu pengiriman habis.' };
    }
    console.error(`[FormyChat] Network error for form ${formId}`);
    return { success: false, error: 'Terjadi kesalahan pada jaringan.' };
  }
}

/**
 * Submit booking form to custom WordPress API endpoint
 * Bypasses nginx issues with CF7 REST API
 *
 * @param formId  Form ID
 * @param fields Key-value pairs of form fields
 */
export async function submitBookingForm(
  formId: string,
  fields: Record<string, string>
): Promise<{ success: boolean; message: string; entry_id?: number }> {
  const WORDPRESS_URL =
    process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://backend.bengkelwiguna.com';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    const response = await fetch(`${WORDPRESS_URL}/booking-api.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form_id: formId, fields }),
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Gagal mengirim data' }));
      return { success: false, message: errorData.message || 'Gagal mengirim data. Silakan coba lagi.' };
    }

    const data = await response.json();
    return data;

  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return { success: false, message: 'Koneksi terputus. Waktu pengiriman habis.' };
    }
    console.error('[Booking API] Error:', error);
    return { success: false, message: 'Terjadi kesalahan pada jaringan.' };
  }
}

/**
 * Mengirimkan data form ke Contact Form 7 REST API.
 *
 * @param formId ID form dari Contact Form 7 di WordPress
 * @param formData Instance FormData yang berisi input user
 */
export async function submitContactForm(
  formId: string | number,
  formData: FormData
): Promise<CF7Response> {
  const WORDPRESS_URL =
    process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://backend.bengkelwiguna.com';
  const url = `${WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.status === 400 || response.ok) {
      const data = await response.json();
      return data as CF7Response;
    }

    console.error(`[CF7] Backend returned HTTP ${response.status} for form ${formId}`);
    return {
      contact_form_id: Number(formId),
      status: 'mail_failed',
      message: 'Server sedang sibuk, gagal mengirim pesan.',
    };
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return {
        contact_form_id: Number(formId),
        status: 'mail_failed',
        message: 'Koneksi terputus. Waktu pengiriman habis.',
      };
    }

    console.error(`[CF7] Network/Fetch Error pada form submission ${formId}`);
    return {
      contact_form_id: Number(formId),
      status: 'mail_failed',
      message: 'Terjadi kesalahan pada jaringan. Periksa koneksi internet Anda.',
    };
  }
}
