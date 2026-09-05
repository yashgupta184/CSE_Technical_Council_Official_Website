import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Team | CSE Technical Council — JSS University, Noida",
  description:
    "The people behind the CSE Technical Council at JSS University, Noida. Driving student innovation, research, and competitive programming across AIC, RAC, and CPC.",
  keywords: [
    "CSE Technical Council",
    "CTC",
    "JSS University Noida",
    "AIC",
    "RAC",
    "CPC",
    "Computer Science Council",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
