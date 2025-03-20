"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import DroneNavbar from "./components/drones/DroneNavbar";
import DroneFooter from "./components/drones/DroneFooter";
import { usePathname } from "next/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.webp" />
        <title>
          Briech UAS - Africa's Premier Unmanned Aerial Systems Manufacturer
        </title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {pathname.includes("/drones") ? (
          <>
            <DroneNavbar />
            {children}
            <DroneFooter />
          </>
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
