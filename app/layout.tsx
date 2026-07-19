import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deep in the Abyss | Follow the Evidence",
  description: "Conventional and alternative explanations examined side by side, with transparent evidence ratings and source trails.",
  openGraph: { title: "Deep in the Abyss", description: "Two explanations. One evidence trail. You decide.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Deep in the Abyss", description: "Two explanations. One evidence trail. You decide.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Script async strategy="afterInteractive" crossOrigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9167552007992876" /></body></html>;
}
