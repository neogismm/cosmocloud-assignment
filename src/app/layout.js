import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cosmocloud Internship",
  description: "Cosmocloud Frontend Internship Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
