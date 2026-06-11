'use client';

import { useDisclosure } from '@nextui-org/react';
import BookingModal from './BookingModal';

interface BookingTriggerProps {
  serviceName: string;
  buttonText?: string;
  className?: string;
}

export default function BookingTrigger({ 
  serviceName, 
  buttonText = "Booking Service via Website",
  className = "w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 border border-white/20 flex items-center justify-center gap-2 group"
}: BookingTriggerProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button 
        onClick={onOpen}
        className={className}
      >
        <span className="text-xl">📅</span>
        {buttonText}
      </button>

      <BookingModal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        serviceName={serviceName} 
      />
    </>
  );
}