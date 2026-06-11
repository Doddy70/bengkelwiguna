'use client';

import { useActionState, useEffect } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  Button
} from '@nextui-org/react';
import { submitGenericForm } from '@/app/actions/contact';

interface BookingModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  serviceName: string;
}

export default function BookingModal({ isOpen, onOpenChange, serviceName }: BookingModalProps) {
  // Hubungkan UI ke Server Action CF7
  const [state, formAction, isPending] = useActionState(submitGenericForm, null);

  // Jika form sukses terkirim, kita bisa otomatis tutup modal setelah beberapa detik
  useEffect(() => {
    if (state?.status === 'mail_sent') {
      const timer = setTimeout(() => {
        onOpenChange(false);
      }, 3000); // Tutup setelah 3 detik
      return () => clearTimeout(timer);
    }
  }, [state, onOpenChange]);

  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      placement="center"
      backdrop="blur"
      className="bg-white dark:bg-gray-950"
    >
      <ModalContent>
        {(onClose) => (
          <form action={formAction}>
            <ModalHeader className="flex flex-col gap-1 text-center mt-4">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-gold">Booking Service</span>
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-brand-blue dark:text-white">
                Buat Jadwal
              </h2>
              <p className="text-sm text-gray-500 font-medium normal-case mt-1">
                Layanan: {serviceName}
              </p>
            </ModalHeader>
            
            <ModalBody>
              {/* Pesan Sukses / Error Global */}
              {state?.status === 'mail_sent' && (
                <div className="p-3 bg-green-50 text-green-700 rounded-xl text-sm font-bold text-center border border-green-200">
                  ✅ {state.message}
                </div>
              )}
              {state?.status === 'mail_failed' && (
                <div className="p-3 bg-red-50 text-red-700 rounded-xl text-sm font-bold text-center border border-red-200">
                  ❌ {state.message}
                </div>
              )}

              {/* 
                PENTING: Field name WAJIB sama persis dengan yang ada di shortcode Contact Form 7.
                Default tag CF7 umumnya: your-name, your-email, your-tel, your-message.
              */}
              <Input
                autoFocus
                name="your-name"
                label="Nama Lengkap"
                placeholder="Masukkan nama Anda"
                variant="bordered"
                isRequired
                isInvalid={state?.invalid_fields?.some(f => f.field === 'your-name')}
                errorMessage={state?.invalid_fields?.find(f => f.field === 'your-name')?.message}
              />

              <Input
                name="your-email"
                label="Alamat Email"
                placeholder="nama@email.com"
                type="email"
                variant="bordered"
                isRequired
                isInvalid={state?.invalid_fields?.some(f => f.field === 'your-email')}
                errorMessage={state?.invalid_fields?.find(f => f.field === 'your-email')?.message}
              />

              <Input
                name="your-tel"
                label="Nomor Telepon / WhatsApp"
                placeholder="081234567890"
                type="tel"
                variant="bordered"
                isRequired
                isInvalid={state?.invalid_fields?.some(f => f.field === 'your-tel')}
                errorMessage={state?.invalid_fields?.find(f => f.field === 'your-tel')?.message}
              />

              <Textarea
                name="your-message"
                label="Keluhan / Pesan (Opsional)"
                placeholder="Jelaskan kendala kendaraan Anda..."
                variant="bordered"
              />

              {/* Hidden Fields for CF7 Metadata */}
              <input type="hidden" name="_wpcf7" value="5ca70cf" />
              {/* Optional: Anda bisa menambahkan hidden field untuk mengirim nama layanan otomatis jika CF7 Anda memiliki tag [hidden service-name] */}
              <input type="hidden" name="service-name" value={serviceName} />
            </ModalBody>
            
            <ModalFooter>
              <Button 
                variant="flat" 
                onPress={onClose}
                className="font-bold bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                Batal
              </Button>
              <Button 
                type="submit"
                isLoading={isPending}
                className="bg-brand-gold text-brand-blue font-black uppercase tracking-widest px-6"
              >
                Booking Sekarang
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}