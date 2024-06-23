import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Inter 글꼴을 설정
const inter = Inter({
  weight: ["800"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
// pr test
