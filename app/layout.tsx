import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentic DS",
  description: "Minimal Next.js app for deployment",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Inter, ui-sans-serif, system-ui, Arial" }}>{children}</body>
    </html>
  );
}
