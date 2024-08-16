import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import MyLayout from "./myLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facebook",
  description: "This website is the first social medai made by egyption hands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyLayout>
           <Navbar />
            {children}
        </MyLayout>
          
        
       
      </body>
      {/* <div className="h-12 bg-white w-full"></div> */}
    </html>
  );
}
