import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import Footer from "./components/footer";
import NavBar from "./components/NavBar";

const notoSans = Noto_Sans_KR({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "케어링 도봉 요양보호사교육원",
  description: "도봉구 국비 지원 요양보호사 자격증 교육원",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSans.className}>
      <body className=" min-h-screen flex flex-col">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
