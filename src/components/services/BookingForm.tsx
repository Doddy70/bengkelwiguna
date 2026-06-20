"use client";

import { useState, useTransition } from "react";
import { Icon } from "@iconify/react";
import { submitContactForm, CF7_FORMS } from "@/lib/contact";

interface BookingFormProps {
  serviceName?: string;
  compact?: boolean;
}

interface FormField {
  name: string;
  label: string;
  type: "text" | "tel" | "email" | "textarea" | "select" | "date";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  width?: "full" | "half";
}

const bookingFields: FormField[] = [
  {
    name: "your-name",
    label: "Nama Lengkap",
    type: "text",
    placeholder: "Masukkan nama lengkap Anda",
    required: true,
    width: "half",
  },
  {
    name: "your-phone",
    label: "Nomor WhatsApp",
    type: "tel",
    placeholder: "08xxxxxxxxxx",
    required: true,
    width: "half",
  },
  {
    name: "your-email",
    label: "Email",
    type: "email",
    placeholder: "email@contoh.com",
    required: false,
    width: "full",
  },
  {
    name: "service-type",
    label: "Jenis Layanan",
    type: "select",
    required: true,
    width: "full",
    options: [
      { value: "", label: "Pilih layanan yang diinginkan" },
      { value: "service-berkala", label: "Service Berkala" },
      { value: "semi-overhaul", label: "Semi Overhaul" },
      { value: "cek-kaki-kaki", label: "Cek Kaki Kaki" },
      { value: "flushing-ac", label: "Flushing AC" },
      { value: "kuras-radiator", label: "Kuras Radiator" },
      { value: "lainnya", label: "Lainnya" },
    ],
  },
  {
    name: "your-date",
    label: "Tanggal Booking",
    type: "date",
    required: true,
    width: "half",
  },
  {
    name: "your-time",
    label: "Waktu (Estimasi)",
    type: "select",
    required: false,
    width: "half",
    options: [
      { value: "", label: "Pilih waktu" },
      { value: "08:00 - 10:00", label: "08:00 - 10:00" },
      { value: "10:00 - 12:00", label: "10:00 - 12:00" },
      { value: "13:00 - 15:00", label: "13:00 - 15:00" },
      { value: "15:00 - 17:00", label: "15:00 - 17:00" },
    ],
  },
  {
    name: "your-message",
    label: "Keluhan / Catatan",
    type: "textarea",
    placeholder: "Jelaskan keluhan atau kebutuhan service Anda...",
    required: false,
    width: "full",
  },
];

export default function BookingForm({ serviceName, compact = false }: BookingFormProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Add hidden fields required by CF7 addons
    formData.append("_wpcf7_unit_tag", `wpcf7-f${CF7_FORMS.BOOKING_SERVICE}-o1`);
    formData.append("_wpcf7_container_post", "0");

    // Add service name if provided
    if (serviceName) {
      formData.set("service-type", serviceName.toLowerCase().replace(/\s+/g, "-"));
    }

    startTransition(async () => {
      const result = await submitContactForm(CF7_FORMS.BOOKING_SERVICE, formData);

      if (result.status === "mail_sent") {
        setStatus("success");
        setMessage("Booking berhasil dikirim! Kami akan menghubungi Anda via WhatsApp.");
        setFormKey((k) => k + 1);
      } else if (result.status === "validation_failed") {
        setStatus("error");
        const errors = result.invalid_fields
          ?.map((f) => `${f.message}`)
          .join(", ");
        setMessage(`Validasi gagal: ${errors || "Silakan periksa input Anda."}`);
      } else {
        setStatus("error");
        setMessage(result.message || "Gagal mengirim booking. Silakan coba lagi.");
      }
    });
  };

  if (status === "success") {
    return (
      <div className={`rounded-2xl border border-green-200 bg-green-50 p-6 sm:p-8 ${compact ? "text-center" : ""}`}>
        <div className={`flex ${compact ? "flex-col items-center" : "items-start gap-4"}`}>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100">
            <Icon icon="solar:check-circle-bold" className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-bold text-green-800">Booking Berhasil!</h3>
            <p className="mt-1 text-sm text-green-700">{message}</p>
            <button
              onClick={() => {
                setStatus("idle");
                setMessage("");
              }}
              className="mt-4 text-sm font-medium text-green-700 underline hover:text-green-800"
            >
              Kirim booking lain
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6 lg:p-8">
      {/* Header */}
      <div className={`mb-6 ${compact ? "text-center" : ""}`}>
        <div className={`mx-auto w-12 h-12 rounded-full bg-[#224297]/10 flex items-center justify-center mb-3 ${compact ? "mx-auto" : ""}`}>
          <Icon icon="solar:calendar-mark" className="w-6 h-6 text-[#224297]" />
        </div>
        <h3 className={`text-lg font-bold text-gray-900 ${compact ? "text-center" : ""}`}>
          Booking Service
        </h3>
        <p className={`text-sm text-gray-600 mt-1 ${compact ? "text-center" : ""}`}>
          {serviceName ? `Booking ${serviceName}` : "Reservasi layanan Bengkel Wiguna"}
        </p>
      </div>

      {/* Form */}
      <form key={formKey} onSubmit={handleSubmit} className="space-y-4">
        {/* Row layout for half-width fields */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {bookingFields.map((field) => {
            const isHalf = field.width === "half";
            const isHidden = field.name === "your-date" || field.name === "your-time";

            return (
              <div key={field.name} className={isHalf ? "" : "sm:col-span-2"}>
                <label
                  htmlFor={field.name}
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  {field.label}
                  {field.required && <span className="ml-1 text-red-500">*</span>}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    rows={3}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#224297] focus:outline-none focus:ring-2 focus:ring-[#224297]/20 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[#224297] focus:outline-none focus:ring-2 focus:ring-[#224297]/20 disabled:bg-gray-50 disabled:text-gray-500"
                  >
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#224297] focus:outline-none focus:ring-2 focus:ring-[#224297]/20 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Hidden fields for CF7 */}
        <input type="hidden" name="_wpcf7" value={CF7_FORMS.BOOKING_SERVICE} />
        <input type="hidden" name="_wpcf7_version" value="5.8.7" />
        <input type="hidden" name="_wpcf7_locale" value="id_ID" />
        <input type="hidden" name="_wpcf7_container_post" value="0" />
        <input type="hidden" name="_wpcf7_posted_data_hash" value="" />

        {/* Error Message */}
        {status === "error" && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4">
            <div className="flex items-start gap-3">
              <Icon icon="solar:danger-triangle-linear" className="h-5 w-5 shrink-0 text-red-500" />
              <p className="text-sm text-red-700">{message}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#224297] py-4 font-bold text-white transition-all hover:bg-[#1a3580] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? (
            <>
              <Icon icon="solar:loader-linear" className="h-5 w-5 animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              <Icon icon="solar:calendar-check-bold" className="h-5 w-5" />
              Kirim Booking
            </>
          )}
        </button>

        {/* WhatsApp Alternative */}
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-gradient-to-br from-gray-50 to-white px-4 text-gray-500">atau</span>
          </div>
        </div>

        <a
          href={`https://wa.me/6287817773888?text=${encodeURIComponent(
            `Halo Minna, saya ingin booking ${serviceName || "service"} di Bengkel Wiguna.\n\nNama: \nWhatsApp: \nTanggal: \nCatatan: `
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#25D366]/20 bg-[#25D366] py-4 font-bold text-white transition-all hover:bg-[#20bd5a]"
        >
          <Icon icon="fa6-brands:whatsapp" className="h-5 w-5" />
          Booking via WhatsApp
        </a>

        {/* Location Info */}
        <div className="flex items-start gap-3 border-t border-gray-100 pt-4">
          <Icon icon="solar:map-point-linear" className="h-5 w-5 shrink-0 text-gray-400" />
          <div className="text-xs text-gray-500">
            <p className="font-medium text-gray-700">Bengkel Wiguna</p>
            <p>Jl. Margonda No.268, Kemiri Muka, Depok 16423</p>
          </div>
        </div>
      </form>
    </div>
  );
}
