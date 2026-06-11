"use client";

import React from "react";
import {Avatar, Link, Button, cn} from "@nextui-org/react";
import {Icon} from "@iconify/react";

export type TeamMember = {
  name: string;
  avatar: string;
  role: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
};

interface TeamMemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  member: TeamMember;
}

const TeamMemberCard = ({ member, className, ...props }: TeamMemberCardProps) => (
  <div
    className={cn(
      "flex flex-col items-center brand-rounded bg-content1 px-4 py-6 text-center shadow-small border border-transparent hover:border-brand-blue/20 transition-all",
      className,
    )}
    {...props}
  >
    <Avatar className="h-24 w-24 brand-rounded" src={member.avatar} />
    <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
    <span className="text-small text-brand-blue font-medium">{member.role}</span>
    <p className="mb-4 mt-2 text-default-600 text-sm line-clamp-3">{member.bio}</p>
    <div className="flex gap-4">
      {member.social?.twitter && (
        <Link isExternal href={member.social.twitter}>
          <Icon className="text-default-400 hover:text-brand-blue transition-colors" icon="bi:twitter" width={18} />
        </Link>
      )}
      {member.social?.linkedin && (
        <Link isExternal href={member.social.linkedin}>
          <Icon className="text-default-400 hover:text-brand-blue transition-colors" icon="bi:linkedin" width={18} />
        </Link>
      )}
      {member.social?.instagram && (
        <Link isExternal href={member.social.instagram}>
          <Icon className="text-default-400 hover:text-brand-blue transition-colors" icon="bi:instagram" width={18} />
        </Link>
      )}
      {member.social?.github && (
        <Link isExternal href={member.social.github}>
          <Icon className="text-default-400 hover:text-brand-blue transition-colors" icon="bi:github" width={18} />
        </Link>
      )}
    </div>
  </div>
);

interface TeamSectionProps {
  tagline?: string;
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export default function TeamSection({
  tagline = "Keahlian & Pengalaman",
  title = "Kenali Tim Ahli Kami",
  subtitle = "Tim teknisi Bengkel Wiguna terdiri dari para profesional bersertifikat yang berdedikasi untuk memberikan perawatan terbaik bagi kendaraan Anda.",
  members = [
    {
      name: "Slamet Wiguna",
      role: "Founder & Master Technician",
      avatar: "https://i.pravatar.cc/150?u=s1",
      bio: "Berpengalaman lebih dari 20 tahun dalam dunia otomotif dan spesialis mesin diesel.",
      social: { instagram: "#", linkedin: "#" }
    },
    {
      name: "Budi Santoso",
      role: "Service Advisor",
      avatar: "https://i.pravatar.cc/150?u=s2",
      bio: "Siap membantu Anda mendiagnosa masalah kendaraan dan memberikan solusi efisien.",
      social: { instagram: "#", linkedin: "#" }
    },
    {
      name: "Andi Wijaya",
      role: "Senior Mechanic",
      avatar: "https://i.pravatar.cc/150?u=s3",
      bio: "Spesialis sistem kelistrikan dan ECU tuning untuk performa kendaraan maksimal.",
      social: { instagram: "#" }
    }
  ],
  primaryAction = {
    label: "Hubungi Kami",
    href: "/contact"
  },
  secondaryAction = {
    label: "Tentang Bengkel",
    href: "/about"
  }
}: TeamSectionProps) {
  return (
    <section className="flex w-full flex-col items-center py-24 px-6">
      <div className="flex max-w-2xl flex-col text-center items-center">
        <h2 className="font-bold text-brand-blue uppercase tracking-wider text-sm mb-2">{tagline}</h2>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">{title}</h1>
        <p className="text-large text-default-500 mb-8">
          {subtitle}
        </p>
        <div className="flex w-full justify-center gap-4">
          <Button as={Link} href={secondaryAction.href} variant="bordered" className="brand-rounded font-medium">
            {secondaryAction.label}
          </Button>
          <Button as={Link} href={primaryAction.href} className="bg-brand-blue text-white brand-rounded font-medium">
            {primaryAction.label}
          </Button>
        </div>
      </div>
      <div className="mt-16 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
}
