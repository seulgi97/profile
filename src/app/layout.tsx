import type { Metadata } from "next";
import { css } from "../../styled-system/css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My professional portfolio and profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={css({
          fontFamily: "body",
          bg: "bg",
          color: "text",
          minHeight: "100vh",
        })}
      >
        {children}
      </body>
    </html>
  );
}
