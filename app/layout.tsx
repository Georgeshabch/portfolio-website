import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-contex";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "George Habchi",
  description: "George is a full-stack developer with 1 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body  className="relative bg-gray-50 pt-28 text-gray-950 transition-all 
                         sm:pt-36 ">
      <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem]
                     rounded-full bg-[#946263] blur-[10rem] dark:bg-[#fbe2e3] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#676394]
                        blur-[10rem] dark:bg-[#dbd7fb] sm:left-[-30rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
                        xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
