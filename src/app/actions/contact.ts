'use server';

import { submitFormyChat, CF7_FORMS, type FormyChatResponse } from '@/lib/contact';

/**
 * Convert FormData to plain object for JSON serialization.
 */
function formDataToObject(formData: FormData): Record<string, string> {
  const obj: Record<string, string> = {};
  formData.forEach((value, key) => {
    if (typeof value === 'string') {
      obj[key] = value;
    }
  });
  return obj;
}

/**
 * Server Action for Newsletter Subscription (via CF7).
 */
export async function subscribeNewsletter(
  prevState: unknown,
  formData: FormData
): Promise<FormyChatResponse> {
  const email = (formData.get('your-email') || formData.get('email')) as string;

  if (!email || typeof email !== 'string') {
    return { success: false, error: 'Mohon masukkan alamat email yang valid.' };
  }

  const fields: Record<string, string> = { 'your-email': email };

  return submitFormyChat(CF7_FORMS.NEWSLETTER, fields);
}

/**
 * Generic Server Action for Booking/Contact Forms via FormyChat.
 * FormyChat handles CF7 submission + WhatsApp notification internally.
 *
 * Flow: Form Submit → Server Action → FormyChat API → CF7 mail + WA notification
 */
export async function submitGenericForm(
  prevState: unknown,
  formData: FormData
): Promise<FormyChatResponse> {
  // Convert FormData to plain object for JSON POST to FormyChat
  const fields = formDataToObject(formData);

  // Remove CF7-specific metadata fields (not needed for FormyChat)
  delete fields['_wpcf7'];
  delete fields['_wpcf7_version'];
  delete fields['_wpcf7_locale'];
  delete fields['_wpcf7_unit_tag'];
  delete fields['_wpcf7_container_post'];
  delete fields['_wpcf7_posted_data_hash'];
  delete fields['service-name'];

  // Use booking form ID from environment
  const formId = CF7_FORMS.BOOKING_SERVICE;

  const result = await submitFormyChat(formId, fields);

  // Return consistent shape for client components
  if (result.success) {
    return {
      success: true,
      data: result.data,
      // Include a status field so client can treat it like CF7 mail_sent
      status: 'mail_sent',
      message: 'Booking berhasil terkirim! Tim kami akan segera menghubungi Anda.',
    } as unknown as FormyChatResponse;
  }

  return {
    success: false,
    error: result.error || 'Gagal mengirim booking. Silakan coba lagi.',
  };
}
