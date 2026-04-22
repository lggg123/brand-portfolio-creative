import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Cantu | Director of Football Video",
  description:
    "Cinematic sports videography and creative direction. D1 athletic videography at Southern Utah University and University at Buffalo.",
  keywords: [
    "football video",
    "sports videography",
    "cinematic",
    "D1 athletics",
    "recruiting videos",
  ],
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
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
