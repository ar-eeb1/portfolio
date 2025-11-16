import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Application/Navbar";
import ThemeProvider from "@/components/Application/ThemeProvider";
import Script from "next/script";
import Footer from "@/components/Application/Footer";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Areeb Khan | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#101828] text-zinc-900 dark:text-zinc-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Script src="https://cdn.lordicon.com/lordicon.js" />
          <main className="md:pt-10 pt-20">{children}</main>
          <Link href="https://wa.me/+923171232544" target="_blank" className="fixed bottom-10 right-10">
          <lord-icon
            src="https://cdn.lordicon.com/dnphlhar.json"
            trigger="loop"
            delay="1000"
            colors="primary:#0e98f6,secondary:#00ca5d"
            style={{ width: 70, height: 70 }}
          >
          </lord-icon>
        </Link>
        <Footer />
      </ThemeProvider>
    </body>
    </html >
  );
}
