import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ApolloClientProvider from "@/providers/apollo-client";
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
  title: "Octomigo",
  description: "Find github user profiles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ApolloClientProvider>{children}</ApolloClientProvider>
      </body>
    </html>
  );
}
