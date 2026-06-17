import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CustomTheme } from "~/components/custom-theme";
// import { RootNavbar } from "~/components/root-navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flowbite React Blocks",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`dark:bg-gray-900 ${inter.className}`}>
        <CustomTheme>
          {/* <RootNavbar /> */}
          {children}
        </CustomTheme>
      </body>
    </html>
  );
}
