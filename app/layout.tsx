import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Abiola Jimoh | Fintech Consultant & Business Advisor",
    template: "%s | Abiola Jimoh",
  },
  description:
    "Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
  keywords: [
    "fintech consultant",
    "business advisor",
    "regulatory compliance",
    "business growth",
    "strategic partnerships",
    "risk evaluation",
    "legal advisory",
  ],
  authors: [{ name: "Abiola Jimoh" }],
  creator: "Abiola Jimoh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abiolajimoh.com",
    title: "Abiola Jimoj | Fintech Consultant & Business Advisor",
    description:
      "Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
    siteName: "Abiola Jimoh",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="canonical" href="https://abiolajimoh.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abiola Jimoh",
              url: "https://abiolajimoh.com",
              jobTitle: "Fintech Consultant & Business Advisor",
              sameAs: [
                "https://twitter.com/abiolajimoh",
                "https://linkedin.com/in/abiolajimoh",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
