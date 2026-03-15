import type { Metadata } from "next";
import config from "./config";
import "./globals.css";

export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="font-sans antialiased relative">
        {children}
      </body>
    </html>
  );
}