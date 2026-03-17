import { inter } from "./ui/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased bg-background-color text-text-color`}
      >
        {children}
      </body>
    </html>
  );
}
