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
  Button,
  Select,
  SelectItem
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

  const hasError = (fieldName: string) => state?.invalid_fields?.some(f => f.field === fieldName);
  const getError = (fieldName: string) => state?.invalid_fields?.find(f => f.field === fieldName)?.message;

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
              {/* Pesan Sukses / Error Global */}
              {state?.status === 'mail_sent' && (
                <div className="p-3 bg-green-50 text-green-700 rounded-xl text-sm font-bold text-center border border-green-200">
                  ✅ Berhasil! Reservasi Anda sudah kami terima. Tim kami akan segera menghubungi Anda.
                </div>
              )}
              {state?.status === 'mail_failed' && (
                <div className="p-3 bg-red-50 text-red-700 rounded-xl text-sm font-bold text-center border border-red-200">
                  ❌ {state.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  autoFocus
                  name="nama-depan"
                  label="Nama Lengkap"
                  placeholder="Masukkan nama Anda"
                  variant="bordered"
                  isInvalid={hasError('nama-depan')}
                  errorMessage={getError('nama-depan')}
                />

                <Input
                  name="telepon"
                  label="Nomer Tlp. / Whatsapp"
                  placeholder="0812xxxxxx"
                  type="tel"
                  variant="bordered"
                  isRequired
                  isInvalid={hasError('telepon')}
                  errorMessage={getError('telepon')}
                />

                <Input
                  name="merek-mobil"
                  label="Merek Mobil"
                  placeholder="Contoh: Toyota Avanza"
                  variant="bordered"
                  isRequired
                  isInvalid={hasError('merek-mobil')}
                  errorMessage={getError('merek-mobil')}
                />

                <Input
                  name="tahun-mobil"
                  label="Tahun Mobil"
                  placeholder="Contoh: 2018"
                  variant="bordered"
                  isRequired
                  isInvalid={hasError('tahun-mobil')}
                  errorMessage={getError('tahun-mobil')}
                />

                <Input
                  name="nomer-polisi"
                  label="No. Polisi"
                  placeholder="Contoh: B 1234 ABC"
                  variant="bordered"
                  isRequired
                  isInvalid={hasError('nomer-polisi')}
                  errorMessage={getError('nomer-polisi')}
                />

                <Select 
                  name="pilihan-servis"
                  label="Pilihan Treatment / Servis" 
                  variant="bordered"
                  defaultSelectedKeys={serviceName ? [serviceName] : []}
                >
                  <SelectItem key="Cek Kaki Kaki" value="Cek Kaki Kaki">Cek Kaki Kaki</SelectItem>
                  <SelectItem key="Detoks Mesin" value="Detoks Mesin">Detoks Mesin</SelectItem>
                  <SelectItem key="Semi Overhaul" value="Semi Overhaul">Semi Overhaul</SelectItem>
                  <SelectItem key="Coolant Changer / Flush" value="Coolant Changer / Flush">Coolant Changer / Flush</SelectItem>
                  <SelectItem key="Penggantian Oli" value="Penggantian Oli">Penggantian Oli</SelectItem>
                  <SelectItem key="Penggantian Ban" value="Penggantian Ban">Penggantian Ban</SelectItem>
                  <SelectItem key="Spooring" value="Spooring">Spooring</SelectItem>
                  <SelectItem key="Balancing" value="Balancing">Balancing</SelectItem>
                  <SelectItem key="Rem & Rotasi Roda" value="Rem & Rotasi Roda">Rem & Rotasi Roda</SelectItem>
                  <SelectItem key="Servis Berkala" value="Servis Berkala">Servis Berkala</SelectItem>
                  <SelectItem key="Cars Detailing / Wash" value="Cars Detailing / Wash">Cars Detailing / Wash</SelectItem>
                  <SelectItem key="Servis Lain nya" value="Servis Lain nya">Servis Lain nya</SelectItem>
                  {/* Tambahkan fallback key jika nama layanannya unik/tidak ada di list */}
                  {serviceName && ![
                    'Cek Kaki Kaki', 'Detoks Mesin', 'Semi Overhaul', 'Coolant Changer / Flush',
                    'Penggantian Oli', 'Penggantian Ban', 'Spooring', 'Balancing', 'Rem & Rotasi Roda',
                    'Servis Berkala', 'Cars Detailing / Wash', 'Servis Lain nya'
                  ].includes(serviceName) && (
                    <SelectItem key={serviceName} value={serviceName}>{serviceName}</SelectItem>
                  )}
                </Select>

                <Input
                  name="tanggal"
                  label="Tanggal Kedatangan"
                  type="date"
                  variant="bordered"
                  isRequired
                  placeholder=""
                  isInvalid={hasError('tanggal')}
                  errorMessage={getError('tanggal')}
                />

                <Select 
                  name="jam-datang"
                  label="Jam Kedatangan" 
                  variant="bordered"
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

              <Textarea
                name="keluhan-kendaraan"
                label="Keluhan Kendaraan"
                placeholder="Tulis masalah / kendala kendaraan Anda..."
                variant="bordered"
                isInvalid={hasError('keluhan-kendaraan')}
                errorMessage={getError('keluhan-kendaraan')}
              />

              {/* CF7 Hidden Metadata (Ambil dari setting lingkungan/fallback ke form spesifik) */}
              <input type="hidden" name="_wpcf7" value={process.env.NEXT_PUBLIC_CF7_BOOKING_ID || "5ca70cf"} />
              <input type="hidden" name="_wpcf7_version" value="6.1.6" />
              <input type="hidden" name="_wpcf7_locale" value="en_US" />
              <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f5ca70cf-p1-o1" />
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