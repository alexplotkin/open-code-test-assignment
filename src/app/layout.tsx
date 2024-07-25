import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resources | Open Core",
  description: "Open Core resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={font.className}>
    <Header />
    <main className="pb-25">
      {children}
    </main>
    <Footer />
    </body>
    </html>
  );
}
