import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan Yogan",
  description: "I'm a nerd who loves to code and make things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" antialiased bg-slate-50">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
