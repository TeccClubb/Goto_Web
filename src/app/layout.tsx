import type { Metadata } from "next";
 
import "./globals.css";
import { inter } from "@/lib/font";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

 


export const metadata: Metadata = {
  title: "Goto VPN – Secure & Private Internet",
  description: "Goto VPN ensures secure, fast, and private internet browsing with military-grade encryption.",
  icons:{
      icon: [
      { url: "/gotologo.png", sizes: "32x32", type: "image/png" },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className="antialiased min-h-screen flex flex-col"
      >
        <Navbar></Navbar>
        <main className="flex-grow">

        {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
