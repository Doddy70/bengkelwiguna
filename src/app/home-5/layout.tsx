// app/layout.tsx
export const metadata = {
    title: 'Exsit Next',
    description: 'Modern Next.js app with Tailwind + TypeScript + SCSS',
};


export default function Home1Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="font-sora">
            {children}
        </div>
    );
}
