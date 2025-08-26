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
  title: {
    default: "Arceus — Personal Intelligence",
    template: "%s | Arceus"
  },
  description: "Aiva is your personalized AI assistant that executes on your behalf. Connect your apps, create projects, and get things done.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Arceus — Personal Intelligence",
    description: "Aiva is your personalized AI assistant that executes on your behalf. Connect your apps, create projects, and get things done.",
    url: "https://www.arceus.ca",
    siteName: "Arceus",
    images: ["/assets/arceus-logo-glass.png"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arceus — Personal Intelligence",
    description: "Aiva is your personalized AI assistant that executes on your behalf.",
    images: ["/assets/arceus-logo-glass.png"]
  }
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
        {children}
      </body>
    </html>
  );
}
