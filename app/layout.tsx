import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Valment | Process & Data Intelligence",
  description: "Process analytics and data intelligence for SAP-driven organizations. Signavio process mining, SAP BTP/BDC modernization, Databricks platforms, and AI governance. Discover, prioritize, and deliver measurable business value.",
  metadataBase: new URL('https://www.valment.com'),
  alternates: {
    canonical: '/',
  },
  applicationName: 'Valment',
  authors: [{ name: 'Valment Partners Inc.' }],
  generator: 'Next.js',
  keywords: ['Process Analytics', 'SAP Signavio', 'Data Intelligence', 'SAP BTP', 'Databricks', 'AI Governance', 'Enterprise Architecture', 'Process Mining'],
  openGraph: {
    title: "Valment | Process & Data Intelligence",
    description: "Process analytics and data intelligence for SAP-driven organizations. Signavio process mining, SAP BTP/BDC modernization, Databricks platforms, and AI governance.",
    url: 'https://www.valment.com',
    siteName: 'Valment',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Valment - Process & Data Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Valment | Process & Data Intelligence",
    description: "Process analytics and data intelligence for SAP-driven organizations. Signavio, SAP BTP/BDC, Databricks, and AI governance.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  verification: {
    google: 'google-site-verification-code', // TODO: Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for older browsers */}
        <meta name="author" content="Valment Partners Inc." />
        <meta property="og:site_name" content="Valment" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
