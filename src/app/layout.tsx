import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guilherme Andrade - Advocacia",
  description: "Desenvolvido por Lucas Baptista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <body className={inter.className}>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
