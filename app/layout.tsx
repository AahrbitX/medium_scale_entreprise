import type { Metadata } from "next";
import "./globals.css";

import { interVariable, dmsansVariable } from "./fonts";
import Navbar from "./components/navbar";
import { Providers } from "./providers";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Medium Scale Enterprise",
  description: "Medium Scale Enterprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${interVariable} ${dmsansVariable} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
