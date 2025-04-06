/*
 * Reference:
 * Microsoft. (2025). Copilot (GPT-4) [Large Language Model]. https://copilot.microsoft.com/
 * In-Text Citation:
 * (Microsoft, 2025)
 */

import { ReactNode } from "react";
import Link from "next/link";
import "../app/globals.css";;

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Strata Council Management</h1>
      </header>
      <nav className="bg-blue-500 text-white flex justify-center p-3 space-x-4">
        <Link href="/">Home</Link>
        <Link href="/members">Council Members</Link>
        <Link href="/meetings">Meetings</Link>
      </nav>
      <main className="p-5">{children}</main>
      <footer className="bg-blue-600 text-white p-3 text-center">
        <p>© 2025 Strata Council Management</p>
      </footer>
    </div>
  );
}