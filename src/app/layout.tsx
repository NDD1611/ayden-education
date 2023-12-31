import "../globals.scss";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/provider";
import { locales } from "@/i18n";
// import { Mitr } from "next/font/google";
// import { Baloo_2 } from "next/font/google";

// const mitr = Mitr({
//   weight: ['200', '300', '400', '500', '600', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// })

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Ayden Education program",
  description: "Ayden Education program",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.className}`} suppressHydrationWarning={true} >
        <Provider locale={params.lang}>{children}</Provider>
      </body>
    </html>
  );
}
