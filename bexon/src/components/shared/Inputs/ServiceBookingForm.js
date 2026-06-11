"use client";

import React, { useState } from 'react';

/**
 * ServiceBookingForm
 * Diimplementasikan berdasarkan best practice @form-cro.
 * Berfokus pada completion rate dengan struktur single-column, clear labels, dan high-intent CTA.
 */
export default function ServiceBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    service: '',
    vehicle: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Inline validation for WhatsApp (must be at least 10 digits)
  const validateWhatsApp = (value) => {
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length > 0 && numericValue.length < 10) {
      return "Mohon masukkan nomor WhatsApp yang valid (minimal 10 angka)";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error on change, or validate inline for specific fields
    if (name === 'whatsapp') {
      const errorMsg = validateWhatsApp(value);
      setErrors(prev => ({ ...prev, whatsapp: errorMsg }));
    } else {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi Submit
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nama lengkap wajib diisi";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "Nomor WhatsApp wajib diisi";
    else if (validateWhatsApp(formData.whatsapp)) newErrors.whatsapp = validateWhatsApp(formData.whatsapp);
    if (!formData.service) newErrors.service = "Silakan pilih layanan";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Analytics Tracking (GA4 / GTM)
    // Object-Action naming convention: form_submitted
    try {
      if (typeof window !== 'undefined') {
        const eventData = {
          event: 'form_submitted',
          form_type: 'service_booking',
          service_requested: formData.service,
          has_vehicle_info: !!formData.vehicle
        };
        
        // Push to GTM dataLayer if available
        if (window.dataLayer) {
          window.dataLayer.push(eventData);
        }
        
        // Fallback to direct gtag if available and dataLayer isn't used for events
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'form_submitted', {
            'form_type': 'service_booking',
            'service_requested': formData.service
          });
        }
      }
    } catch (err) {
      console.error('Analytics tracking failed', err);
    }

    // TODO: Ganti dengan endpoint aktual nanti
    // Contoh simulasi API call:
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
        <h3 className="text-xl font-bold text-green-700 mb-2">Terima kasih, {formData.name}!</h3>
        <p className="text-green-600">
          Permintaan booking Anda telah diterima. Tim mekanik Bengkel Wiguna akan menghubungi Anda via WhatsApp dalam waktu kurang dari 15 menit.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Servis</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        
        {/* Name Field - Single Field to reduce friction */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700">Nama Lengkap <span className="text-red-500">*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Misal: Budi Santoso"
            value={formData.name}
            onChange={handleChange}
            className={`px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors w-full`}
          />
          {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name}</span>}
        </div>

        {/* WhatsApp Field - type="tel" for mobile numeric keyboard */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="whatsapp" className="text-sm font-semibold text-gray-700">Nomor WhatsApp <span className="text-red-500">*</span></label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            placeholder="Misal: 0812-3456-7890"
            value={formData.whatsapp}
            onChange={handleChange}
            className={`px-4 py-3 rounded-lg border ${errors.whatsapp ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors w-full`}
          />
          {errors.whatsapp && <span className="text-xs text-red-500 mt-1">{errors.whatsapp}</span>}
        </div>

        {/* Service Type - Dropdown */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="service" className="text-sm font-semibold text-gray-700">Layanan yang Dibutuhkan <span className="text-red-500">*</span></label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors w-full bg-white`}
          >
            <option value="" disabled>Pilih Layanan...</option>
            <option value="spooring">Spooring & Balancing</option>
            <option value="ganti-oli">Ganti Oli</option>
            <option value="servis-berkala">Servis Berkala / Tune Up</option>
            <option value="ac-mobil">Perawatan AC Mobil</option>
            <option value="lainnya">Lainnya / Konsultasi Dulu</option>
          </select>
          {errors.service && <span className="text-xs text-red-500 mt-1">{errors.service}</span>}
        </div>

        {/* Vehicle - Optional */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="vehicle" className="text-sm font-semibold text-gray-700">Kendaraan (Opsional)</label>
          <input
            id="vehicle"
            name="vehicle"
            type="text"
            placeholder="Misal: Honda Brio 2018"
            value={formData.vehicle}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors w-full"
          />
        </div>

        {/* Submit Button & Trust Element */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-lg transition-colors flex items-center justify-center text-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Memproses...
              </span>
            ) : (
              "Booking Jadwal Servis"
            )}
          </button>
          
          <div className="mt-4 text-center flex items-center justify-center gap-2 text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Data Anda aman. Kami akan membalas via WA dalam waktu &lt;15 menit.
          </div>
        </div>
      </form>
    </div>
  );
}
