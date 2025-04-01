import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  );
}