import type { Metadata } from "next";
import { Inter, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ireola.dev"),
  title: {
    default: "Olayele Awujoola — Data & AI Automation Engineer",
    template: "%s — Olayele Awujoola | Data & AI Automation Engineer",
  },
  description:
    "Data analyst and AI automation engineer. I build data pipelines, AI agents, and automations that solve real business problems. Based in Lagos, Nigeria.",
  keywords: [
    "data analyst",
    "AI automation engineer",
    "Nigeria",
    "Lagos",
    "Python",
    "SQL",
    "Power BI",
    "n8n",
    "machine learning",
    "WhatsApp AI",
    "Olayele Gbenga Awujoola",
    "Olayele Awujoola",
    "Ireola",
  ],
  authors: [{ name: "Olayele Awujoola", url: "https://ireola.dev" }],
  creator: "Olayele Awujoola",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ireola.dev",
    siteName: "Olayele Awujoola",
    title: "Olayele Awujoola — Data & AI Automation Engineer",
    description:
      "I build data and AI systems that solve real business problems. Production IoT pipelines, WhatsApp AI agents, and automation that ships.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olayele Awujoola — Data & AI Automation Engineer",
    description:
      "I build data and AI systems that solve real business problems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* No-flash theme script — runs before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}`,
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
