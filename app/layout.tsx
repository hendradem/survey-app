import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white w-[100%] h-screen flex items-center justify-center">
          <div className="w-[30%] h-screen bg-white border border-gray-100">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}