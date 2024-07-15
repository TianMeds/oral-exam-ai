import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OralAI",
  description: "Oral Language Exam AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" className="bg-gray-900">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
