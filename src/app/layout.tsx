import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./(Context)/LanguageContext";
import { PopupProvider } from "./(Context)/DetailedPopupContext";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <PopupProvider>
            {children}
          </PopupProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
