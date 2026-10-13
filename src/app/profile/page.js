
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/signin");
    }
  }, [isPending, session, router]);

  if (isPending || !session) {
    return (
      <main className="p-12 text-center">
        প্রোফাইল লোড হচ্ছে...
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-[65vh] max-w-2xl px-4 py-12">
      <section className="rounded-3xl bg-white p-8 shadow">
        <div className="text-5xl">👤</div>
        <h1 className="mt-4 text-3xl font-black">আমার প্রোফাইল</h1>

        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">নাম</p>
            <p className="mt-1 font-semibold">
              {session.user.name}
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">ইমেইল</p>
            <p className="mt-1 font-semibold">
              {session.user.email}
            </p>
          </div>
        </div>

        <Link
          href="/profile/update"
          className="mt-6 inline-block rounded-xl bg-green-700 px-5 py-3 font-bold text-white"
        >
          তথ্য আপডেট করুন
        </Link>
      </section>
    </main>
  );
}
