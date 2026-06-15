"use client";

import React from 'react';
import WigunaCard from "./WigunaCard";

export interface BlogPost {
    slug: string;
    image: string;
    title: string;
    date: string;
    readTime: string;
    excerpt: string;
    author: string;
    authorAvatar: string;
    authorPosition: string;
}

interface BlogCardOneProps {
    post: BlogPost;
    index?: number;
}

export default function BlogCardOne({ post }: BlogCardOneProps) {
    const handleShare = (e: React.MouseEvent) => {
        e.preventDefault();
        if (typeof window !== 'undefined' && navigator.share) {
            navigator.share({
                title: post.title,
                url: `${window.location.origin}/${post.slug}`
            }).catch(() => {});
        } else if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(`${window.location.origin}/${post.slug}`);
            alert("Link artikel berhasil disalin!");
        }
    };

    return (
        <WigunaCard
            href={`/${post.slug}`}
            image={post.image}
            title={post.title}
            excerpt={post.excerpt}
            variant="split"
            imageAspectRatio="16/10"
            buttonText="Baca Artikel"
            secondaryIcon="solar:share-linear"
            metaItems={[
                { icon: 'solar:calendar-linear', text: post.date },
                { icon: 'solar:clock-circle-linear', text: post.readTime }
            ]}
            onSecondaryClick={handleShare}
        />
    );
}