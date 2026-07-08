/**
 * WhatsApp Contact Utility — Bengkel Wiguna
 * Centralized WhatsApp contact handling
 */

// Get WhatsApp number from environment or fallback to default
export const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || "6287817773888";

// Full WhatsApp URL with pre-filled message
export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${WA_NUMBER}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

// Default consultation message
export const DEFAULT_WA_MESSAGE = "Halo Bengkel Wiguna, saya ingin konsultasi tentang service mobil.";

// Pre-configured WhatsApp URLs for common use cases
export const WHATSAPP_LINKS = {
  // General consultation
  konsultasi: getWhatsAppUrl("Halo Bengkel Wiguna, saya ingin konsultasi tentang service mobil."),

  // Booking
  booking: getWhatsAppUrl("Halo, saya ingin booking service mobil di Bengkel Wiguna."),

  // Specific services
  tuneUp: getWhatsAppUrl("Halo, saya ingin booking Tune Up di Bengkel Wiguna."),
  servisAC: getWhatsAppUrl("Halo, saya ingin booking Service AC di Bengkel Wiguna."),
  gantiOli: getWhatsAppUrl("Halo, saya ingin booking Ganti Oli di Bengkel Wiguna."),

  // Promo inquiry
  promo: getWhatsAppUrl("Halo, saya ingin bertanya tentang promo di Bengkel Wiguna."),
};
