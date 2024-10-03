import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import TopHeader from "@/Components/Header/TopHeader/TopHeader";
import Footer from "@/Components/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "phsoft",
  description: "website",
};
let dData = { phone: "nnnn", mail: "nnnnnnnn@nnn.com" };
let social_links = [
  { name: "twitter", icon: "bi bi-twitter" },
  { name: "facebook", icon: "bi bi-facebook" },
  { name: "instagram", icon: "bi bi-instagram" },
  { name: "linkedin", icon: "bi bi-linkedin" },
];

let dataHeaderPage = [
  { name: "Home", link: "/" },
  { name: "About", link: "/About" },
  { name: "Services", link: "" },
  { name: "Testimonials", link: "" },
  { name: "Pricing", link: "" },
  { name: "Portfolio", link: "" },
  { name: "Blog", link: "" },
  { name: "Contact", link: "" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader socialLinks={social_links} dData={dData} />
        <Header dataHeaderPage={dataHeaderPage} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
