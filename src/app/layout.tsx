import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FirstVisitNotice from "@/components/ui/FirstVisitNotice";

const vazirmatn = localFont({
  src: "../../public/fonts/Vazirmatn.woff2",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "فراز صنعت | راهکارهای مهندسی و تولید",
    template: "%s | فراز صنعت",
  },
  description: "فراز صنعت؛ همراه صنایع کشور در زمینه ساخت تجهیزات، اتوماسیون خطوط تولید و نگهداری تجهیزات صنعتی.",
  icons: {
    icon: "/brand-mark.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FirstVisitNotice />
      </body>
    </html>
  );
}
