'use client';

import { useActionState, useEffect, useRef } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  Button,
  Select,
  SelectItem
} from '@nextui-org/react';
import { submitGenericForm } from '@/app/actions/contact';

const WA_NUMBER = '6281927773888';
const FORM_ID = process.env.NEXT_PUBLIC_CF7_BOOKING_ID || 'b5abf32';

interface BookingModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  serviceName: string;
}

function buildWaUrl(form: HTMLFormElement): string {
  const d = (n: string) => (form.querySelector(`[name="${n}"]`) as HTMLInputElement)?.value || '';
  const msg =
`Halo Min, saya sudah melakukan booking dengan data sbb:
-----------------------------------------------

*Nama* : ${d('nama-depan')}
*Nomor Telepon* : ${d('telepon')}
*Jenis Kendaraan* : ${d('merek-mobil')} ${d('tahun-mobil')} ${d('nomer-polisi')}
*Treatment Servis* : ${d('pilihan-servis')}
*Keluhan Kendaraan* : ${d('keluhan-kendaraan')}
*Jadwal Kedatangan* : ${d('tanggal')} ${d('jam-datang')}

-----------------------------
Mohon segera diproses, Terima kasih`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function BookingModal({ isOpen, onOpenChange, serviceName }: BookingModalProps) {
  const [state, formAction, isPending] = useActionState(submitGenericForm, null);
  const formRef = useRef<HTMLFormElement>(null);

  // Redirect ke WhatsApp saat FormyChat sukses
  useEffect(() => {
    if (state?.success && formRef.current) {
      const timer = setTimeout(() => {
        if (formRef.current) {
          window.open(buildWaUrl(formRef.current), '_blank');
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [state]);

  // Sinkronkan serviceName ke hidden field setiap render
  useEffect(() => {
    if (serviceName && formRef.current) {
      const el = formRef.current.querySelector('[name="pilihan-servis"]') as HTMLInputElement;
      if (el && !el.value) el.value = serviceName;
    }
  }, [serviceName]);

  const defaultServices = [
    'Cek Kaki Kaki', 'Detoks Mesin', 'Semi Overhaul', 'Coolant Changer / Flush',
    'Penggantian Oli', 'Penggantian Ban', 'Spooring', 'Balancing', 'Rem & Rotasi Roda',
    'Servis Berkala', 'Cars Detailing / Wash', 'Servis Lain nya'
  ];
  const hasCustomService = serviceName && !defaultServices.includes(serviceName);
  const allServices = hasCustomService ? [...defaultServices, serviceName] : defaultServices;

  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      placement="center"
      backdrop="blur"
      size="2xl"
      scrollBehavior="inside"
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
                Bengkel Wiguna
              </p>
            </ModalHeader>
            
            <ModalBody>
              {/* Pesan Sukses / Error */}
              {state?.success && (
                <div className="p-3 bg-green-50 text-green-700 rounded-xl text-sm font-bold text-center border border-green-200">
                  ✅ Berhasil! Reservasi Anda sudah terkirim. Tim kami akan menghubungi Anda.
                </div>
              )}
              {state?.success === false && (
                <div className="p-3 bg-red-50 text-red-700 rounded-xl text-sm font-bold text-center border border-red-200">
                  ❌ {state.error || 'Gagal mengirim reservasi. Silakan coba lagi.'}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6 mt-4">
                <Input
                  autoFocus
                  name="nama-depan"
                  label="Nama Lengkap"
                  placeholder="Masukkan nama Anda"
                  labelPlacement="outside"
                  variant="bordered"
                  isRequired
                />

                <Input
                  name="telepon"
                  label="Nomer Tlp. / WhatsApp"
                  type="tel"
                  placeholder="0812xxxxxx"
                  labelPlacement="outside"
                  variant="bordered"
                  isRequired
                />

                <Input
                  name="merek-mobil"
                  label="Merek Mobil"
                  placeholder="Contoh: Honda CRV"
                  labelPlacement="outside"
                  variant="bordered"
                  isRequired
                />

                <Input
                  name="tahun-mobil"
                  label="Tahun Mobil"
                  placeholder="Contoh: 2019"
                  labelPlacement="outside"
                  variant="bordered"
                  isRequired
                />

                <Input
                  name="nomer-polisi"
                  label="No. Polisi"
                  placeholder="Contoh: B 1234 ABC"
                  labelPlacement="outside"
                  variant="bordered"
                  isRequired
                />

                <Select
                  name="pilihan-servis"
                  label="Pilihan Treatment / Servis"
                  placeholder="Pilih jenis servis"
                  labelPlacement="outside"
                  variant="bordered"
                  defaultSelectedKeys={serviceName ? [serviceName] : []}
                  popoverProps={{
                    classNames: {
                      base: "before:bg-white dark:before:bg-gray-950",
                      content: "p-1 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-xl",
                    }
                  }}
                  listboxProps={{
                    itemClasses: {
                      base: "text-gray-900 dark:text-gray-100 data-[hover=true]:bg-gray-100 dark:data-[hover=true]:bg-gray-800",
                    }
                  }}
                >
                  {allServices.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </Select>

                <Input
                  name="tanggal"
                  label="Tanggal Kedatangan"
                  type="date"
                  labelPlacement="outside"
                  variant="bordered"
                  isRequired
                />

                <Select
                  name="jam-datang"
                  label="Jam Kedatangan"
                  placeholder="Pilih jam"
                  labelPlacement="outside"
                  variant="bordered"
                  popoverProps={{
                    classNames: {
                      base: "before:bg-white dark:before:bg-gray-950",
                      content: "p-1 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-xl",
                    }
                  }}
                  listboxProps={{
                    itemClasses: {
                      base: "text-gray-900 dark:text-gray-100 data-[hover=true]:bg-gray-100 dark:data-[hover=true]:bg-gray-800",
                    }
                  }}
                >
                  <SelectItem key="08.00 WIB" value="08.00 WIB">08.00 WIB</SelectItem>
                  <SelectItem key="09.00 WIB" value="09.00 WIB">09.00 WIB</SelectItem>
                  <SelectItem key="10.00 WIB" value="10.00 WIB">10.00 WIB</SelectItem>
                  <SelectItem key="11.00 WIB" value="11.00 WIB">11.00 WIB</SelectItem>
                  <SelectItem key="12.00 WIB" value="12.00 WIB">12.00 WIB</SelectItem>
                  <SelectItem key="13.00 WIB" value="13.00 WIB">13.00 WIB</SelectItem>
                  <SelectItem key="14.00 WIB" value="14.00 WIB">14.00 WIB</SelectItem>
                  <SelectItem key="15.00 WIB" value="15.00 WIB">15.00 WIB</SelectItem>
                  <SelectItem key="16.00 WIB" value="16.00 WIB">16.00 WIB</SelectItem>
                  <SelectItem key="17.00 WIB" value="17.00 WIB">17.00 WIB</SelectItem>
                </Select>
              </div>

              <div className="mt-6 mb-2">
                <Textarea
                  name="keluhan-kendaraan"
                  label="Keluhan Kendaraan"
                  placeholder="Ceritakan masalah mobil Anda di sini..."
                  labelPlacement="outside"
                  variant="bordered"
                />
              </div>
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
                Reservasi Sekarang
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}