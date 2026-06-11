/**
 * Detail Karir - Bengkel Wiguna
 * Halaman detail lowongan kerja di Bengkel Wiguna
 */

import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import CareerDetails1 from "@/components/sections/careers/CareerDetails1";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from '@/components/shared/others/BackToTop';
import HeaderSpace from '@/components/shared/others/HeaderSpace';
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getCareers from "@/libs/getCareers";
import { notFound } from "next/navigation";

const items = getCareers();

export async function generateStaticParams() {
  return items?.map(({ id }) => ({ id: id.toString() })) || [];
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const career = items?.find((c) => c.id === parseInt(id));

  if (!career) {
    return {
      title: "Karir Tidak Ditemukan | Bengkel Wiguna",
    };
  }

  return {
    title: `${career.title} | Lowongan Kerja Bengkel Wiguna`,
    description: `Lowongan kerja untuk posisi ${career.title} di Bengkel Wiguna. Bergabunglah dengan tim kami.`,
    alternates: {
      canonical: `/karir/${id}/`,
    },
  };
}

export default async function KarirDetailsPage({ params }) {
  const { id } = await params;

  const isExistItem = items?.find(({ id: id1 }) => id1 === parseInt(id));
  if (!isExistItem) {
    notFound();
  }

  return (
    <>
      <BackToTop />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroInner
              title={isExistItem.title || "Detail Karir"}
              text={"Detail Lowongan"}
              breadcrums={[{ name: "Karir", path: "/karir/" }]}
            />
            <CareerDetails1 currentItemId={parseInt(id)} />
            <Cta />
          </main>

          <Footer />
        </div>
      </div>
      
      <ClientWrapper />
    </>
  );
}
