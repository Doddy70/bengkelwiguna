/**
 * Tentang Wiguna Page — Bengkel Wiguna
 * Modern About Page with Brand Colors
 */

import TentangWigunaClient from './TentangWigunaClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Wiguna - Bengkel Wiguna',
  description: 'Bengkel One Stop Service terpercaya di Depok. No Drama, No Bongkar-Bongkar, No Tebak-Tebak, No Tipu-Tipu. Servis berkualitas sejak 2010.',
};

export default function TentangWigunaPage() {
  return <TentangWigunaClient />;
}
