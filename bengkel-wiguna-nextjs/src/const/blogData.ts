import blogJson from "@/data/blog.json";

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
    author: string;
    authorAvatar: string;
    authorPosition: string;
    slug: string;
    readTime: string;
    featured?: boolean;
}

export const blogPosts = blogJson as BlogPost[];
