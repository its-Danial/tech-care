import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--unnamed-font-family-manrope",
});

export const metadata: Metadata = {
  title: "Tech Care",
  description: "Front End Developer Dynamic Skills Test V2 - Coalition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
