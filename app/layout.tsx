import { inter } from "./ui/fonts";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans", inter.variable)}>
      <body
        className={`${inter.variable} antialiased bg-background-color text-text-color`}
      >
        {children}
      </body>
    </html>
  );
}
