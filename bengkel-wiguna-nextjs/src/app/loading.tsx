/**
 * Root Loading State — Bengkel Wiguna
 * Improves perceived performance during transitions.
 */

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-brand-blue border-t-brand-gold rounded-full animate-spin"></div>
        <p className="text-brand-blue font-bold uppercase tracking-widest text-xs animate-pulse">
          Memuat Bengkel Wiguna...
        </p>
      </div>
    </div>
  );
}
