
"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const links = [
  { href: "/", label: "হোম" },
  { href: "/products", label: "সব পণ্য" },
  { href: "/categories/sobji", label: "শাক-সবজি" },
  { href: "/categories/chal", label: "চাল" },
];

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleSignOut() {
    await authClient.signOut();
    window.location.href = "/";
  }

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl"></span>
            
           
          <span>
            <span className="block text-xl font-black text-green-800">
              বাজার দর
            </span>
            <span className="block text-xs text-gray-500">
              প্রতিদিনের বাজারের হিসাব
            </span>
          </span>
        </Link>

        <button
          className="rounded-lg border px-3 py-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="মেনু খুলুন"
        >
          ☰
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col gap-4 border-b bg-white p-4 md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:p-0`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 transition hover:text-green-700"
            >
              {link.label}
            </Link>
          ))}

          {!isPending &&
            (session ? (
              <>
                <Link
                  href="/profile"
                  className="font-semibold text-green-700"
                >
                  আমার প্রোফাইল
                </Link>
                <button
                  onClick={handleSignOut}
                  className="rounded-lg bg-red-50 px-4 py-2 font-semibold text-red-600"
                >
                  লগআউট
                </button>
              </>
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/signin"
                  className="rounded-lg border border-green-700 px-4 py-2 font-semibold text-green-800"
                >
                  লগইন
                </Link>
                <Link
                  href="/signup"
                  className="rounded-lg bg-green-700 px-4 py-2 font-semibold text-white"
                >
                  নিবন্ধন
                </Link>
              </div>
            ))}
        </nav>
      </div>
    </header>
  );
}
