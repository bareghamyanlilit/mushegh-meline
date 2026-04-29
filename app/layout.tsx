import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Մուշեղ և Մելինե",
  description: "Մուշեղ և Մելինե",
  openGraph: {
    title: "Մուշեղի և Մելինեի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://mushegh-meline.vercel.app",
    siteName: "Մուշեղ և Մելինե",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      className="bgC"
      >
        {children}
      </body>
    </html>
  );
}
