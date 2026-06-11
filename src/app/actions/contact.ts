'use server';

import { submitContactForm, CF7_FORMS, CF7Response } from '@/lib/contact';

/**
 * Server Action for Newsletter Subscription
 * 
 * Enriched with explicit field checks to ensure stability and provide
 * a clean API for the client component.
 */
export async function subscribeNewsletter(prevState: any, formData: FormData): Promise<CF7Response> {
  const email = formData.get('your-email') || formData.get('email'); // Handle common CF7 names
  
  if (!email || typeof email !== 'string') {
    return {
      contact_form_id: Number(CF7_FORMS.NEWSLETTER),
      status: 'validation_failed',
      message: 'Mohon masukkan alamat email yang valid.',
      invalid_fields: [{
        field: 'your-email',
        message: 'Mohon masukkan alamat email yang valid.',
        idref: '',
        error_id: '-1'
      }]
    };
  }

  // Ensure field name matches typical CF7 default if not already matched
  if (!formData.has('your-email')) {
    formData.append('your-email', email);
  }

  // Submit to WordPress backend securely from the Next.js server
  return submitContactForm(CF7_FORMS.NEWSLETTER, formData);
}

/**
 * Generic Server Action for General Contact/Booking Forms
 * Requires the client to pass the target form ID as a hidden field.
 */
export async function submitGenericForm(prevState: any, formData: FormData): Promise<CF7Response> {
  const formId = formData.get('_wpcf7');
  
  if (!formId || typeof formId !== 'string') {
     return {
      contact_form_id: 0,
      status: 'validation_failed',
      message: 'ID Formulir tidak valid.',
    };
  }

  return submitContactForm(formId, formData);
}
