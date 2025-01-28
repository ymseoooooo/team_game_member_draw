import type { Metadata } from "next";
import { Layout } from "@/_components/Layout";
import "@/_styles/globals.css";

export const metadata: Metadata = {
  title: "팀 게임 멤버 추첨",
  description: "여러가지 팀 게임 멤버를 추첨해 보세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
