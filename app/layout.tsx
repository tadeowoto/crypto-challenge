import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "./components/layout/Header/Header";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body
        className={cn(
          "min-h-screen antialiased font-sans",
          "bg-background-color text-text-color",
        )}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
