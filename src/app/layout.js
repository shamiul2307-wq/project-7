 
import "./globals.css";
import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "বাজার দর | BazarDor",
  description:
    "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর দেখুন ও তুলনা করুন।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        <PriceTicker />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

