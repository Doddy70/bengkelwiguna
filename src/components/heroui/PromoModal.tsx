'use client';

import { useState, useEffect } from 'react';
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import Image from 'next/image';
import { Promosi } from '@/types/wordpress';
import { Icon } from '@iconify/react';

interface PromoModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  promo: Promosi | null;
}

export default function PromoModal({ isOpen, onOpenChange, promo }: PromoModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  if (!promo) return null;

  const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || '';
  const content = typeof promo.content === 'string' ? promo.content : promo.content?.rendered || '';
  const excerpt = typeof promo.excerpt === 'string' ? promo.excerpt : promo.excerpt?.rendered || '';

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return null;
    try {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
    } catch (e) { return dateStr; }
  };

  const endDate = formatDate(promo.tanggal_selesai);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      backdrop="opaque"
      size="2xl"
      scrollBehavior="inside"
      classNames={{
        base: `bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl shadow-2xl
               ${isAnimating ? 'modal-arc-enter' : 'modal-arc-exit'}`,
        wrapper: "items-center justify-center py-8",
        backdrop: "bg-black/80 backdrop-blur-xl",
        closeButton: "right-4 top-4 z-30 text-[#737373] hover:text-white hover:bg-[#1a1a1a] rounded-lg transition-all duration-200"
      }}
      motionProps={{
        variants: {
          enter: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
          },
          exit: {
            opacity: 0,
            scale: 0.96,
            transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
          },
        },
      }}
      hideCloseButton
    >
      <ModalContent className="max-h-[85vh] flex flex-col bg-[#0a0a0a]">
        {(onClose) => (
          <>
            {/* Hero Image Section */}
            {promo.featured_img && (
              <div className="relative w-full aspect-[16/10] bg-[#141415] overflow-hidden shrink-0 rounded-t-2xl">
                <Image
                  src={promo.featured_img}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[#1a1a1a]/80 backdrop-blur-md text-[#737373] hover:text-white rounded-lg transition-all duration-200"
                >
                  <Icon icon="fa6-solid:xmark" className="text-sm" />
                </button>

                {/* Discount Badge */}
                {promo.diskon_persen && (
                  <div className="absolute bottom-4 left-4 bg-[#00B14F] text-white text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5">
                    <Icon icon="fa6-solid:tag" className="text-[10px]" />
                    <span>{promo.diskon_persen}% OFF</span>
                  </div>
                )}
              </div>
            )}

            {/* Scrollable Content */}
            <ModalBody className="p-6 overflow-y-auto flex-1 bg-[#0a0a0a]">
              {/* Title */}
              <h2 className="text-xl font-semibold text-[#F8F8F1] mb-4 leading-tight">
                {title}
              </h2>

              {/* Price & Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-6 pb-4 border-b border-[#2a2a2a]">
                {promo.harga_promo && (
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[#00B14F]">{promo.harga_promo}</span>
                    {promo.harga_asli && (
                      <span className="text-sm text-[#494453] line-through">{promo.harga_asli}</span>
                    )}
                  </div>
                )}

                {endDate && (
                  <div className="flex items-center gap-1.5 text-xs text-[#737373] bg-[#141415] px-2.5 py-1 rounded-md">
                    <Icon icon="fa6-solid:clock" className="text-[#494453]" />
                    <span>Berakhir {endDate}</span>
                  </div>
                )}
              </div>

              {/* Excerpt */}
              {excerpt && (
                <div className="mb-5">
                  <div
                    className="text-sm text-[#737373] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                  />
                </div>
              )}

              {/* Full Content */}
              {content ? (
                <div className="text-sm text-[#737373] leading-relaxed space-y-3
                  [&_h3]:text-[#F8F8F1] [&_h3]:font-semibold [&_h3]:text-base
                  [&_p]:text-[#737373]
                  [&_ul]:space-y-1 [&_li]:text-[#737373]
                  [&_a]:text-[#00B14F] [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              ) : (
                <div className="text-center py-6 bg-[#141415] rounded-xl border border-[#2a2a2a]">
                  <Icon icon="fa6-solid:sparkles" className="text-2xl text-[#494453] mb-2 mx-auto" />
                  <p className="text-sm text-[#494453]">Tidak ada detail tambahan</p>
                </div>
              )}

              {/* Benefits */}
              <div className="mt-6 p-4 bg-[#141415] rounded-xl border border-[#2a2a2a]">
                <h4 className="text-xs font-semibold text-[#494453] uppercase tracking-wider mb-3">Yang Kamu Dapat</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: "fa6-solid:wrench", text: "Servis Profesional" },
                    { icon: "fa6-solid:shield-check", text: "Garansi Servis" },
                    { icon: "fa6-solid:clock", text: "Pengerjaan Cepat" },
                    { icon: "fa6-solid:star", text: "Teknisi Berpengalaman" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md bg-[#1a1a1a] flex items-center justify-center">
                        <Icon icon={item.icon} className="text-[#00B14F] text-xs" />
                      </div>
                      <span className="text-xs text-[#F8F8F1]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ModalBody>

            {/* Footer CTA */}
            <ModalFooter className="bg-[#0a0a0a] border-t border-[#2a2a2a] p-4 shrink-0">
              <div className="flex items-center justify-between gap-4 w-full">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-[#224297] flex items-center justify-center text-white text-xs font-bold">
                    BW
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#F8F8F1]">Bengkel Wiguna</p>
                    <p className="text-[10px] text-[#494453]">Depok • Sejak 2010</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="flat"
                    onPress={onClose}
                    className="bg-[#141415] hover:bg-[#1a1a1a] text-[#737373] text-xs font-medium px-4 rounded-lg transition-all duration-200 min-w-0 h-9"
                  >
                    Tutup
                  </Button>
                  <Button
                    as="a"
                    href={`https://wa.me/6287817773888?text=${encodeURIComponent(`Halo Minna, saya tertarik dengan promo "${title}" di Bengkel Wiguna.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00B14F] hover:bg-[#00a044] text-white text-xs font-semibold px-4 rounded-lg transition-all duration-200 h-9 flex items-center gap-1.5"
                  >
                    <Icon icon="fa6-brands:whatsapp" className="text-sm" />
                    Klaim via WA
                  </Button>
                </div>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
