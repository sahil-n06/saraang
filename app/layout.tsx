import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"] ,
  display: "swap",
  weight: ["400", "500","600","700"],
  variable: "--font-family-poppins",
});

export const metadata: Metadata = {
  title: "Saraang",
  description: "Celebrate Your Passion",
  icons:{
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
