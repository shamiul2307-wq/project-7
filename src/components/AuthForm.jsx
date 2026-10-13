
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function AuthForm({ mode = "signin" }) {
  const isSignup = mode === "signup";
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const result = isSignup
        ? await authClient.signUp.email({
            name,
            email,
            password,
          })
        : await authClient.signIn.email({
            email,
            password,
          });

      if (result.error) {
        toast.error(result.error.message || "অনুরোধ সফল হয়নি");
        return;
      }

      toast.success(isSignup ? "অ্যাকাউন্ট তৈরি হয়েছে" : "লগইন সফল হয়েছে");

      if (isSignup) {
        router.push("/signin");
      } else {
        router.push("/");
      }

      router.refresh();
    } catch {
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করো।");
    } finally {
      setLoading(false);
    }
  }

  async function handleSocialLogin(provider) {
    try {
      const result = await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });

      if (result.error) {
        toast.error(result.error.message || "সোশ্যাল লগইন ব্যর্থ হয়েছে");
      }
    } catch {
      toast.error("সোশ্যাল লগইন করা যায়নি");
    }
  }

  return (
    <main className="flex min-h-[75vh] items-center justify-center px-4 py-10">
      <section className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-6 shadow-lg sm:p-9">
        <div className="text-center">
          <div className="text-5xl">🥬</div>
          <h1 className="mt-4 text-3xl font-black text-green-900">
            {isSignup ? "নতুন অ্যাকাউন্ট" : "স্বাগতম"}
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            {isSignup
              ? "বাজার দর-এ যোগ দিতে তথ্য পূরণ করো"
              : "বাজারদরের বিস্তারিত দেখতে লগইন করো"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {isSignup && (
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                তোমার নাম
              </label>
              <input
                id="name"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="সম্পূর্ণ নাম"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">
              ইমেইল
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-semibold">
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              type="password"
              autoComplete={isSignup ? "new-password" : "current-password"}
              minLength={8}
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          <button
            disabled={loading}
            className="w-full rounded-xl bg-green-700 px-4 py-3 font-bold text-white transition hover:bg-green-800 disabled:opacity-60"
          >
            {loading
              ? "অপেক্ষা করো..."
              : isSignup
              ? "অ্যাকাউন্ট তৈরি করো"
              : "লগইন করো"}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3 text-xs text-gray-400">
          <div className="h-px flex-1 bg-gray-200" />
          অথবা
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleSocialLogin("google")}
            className="rounded-xl border px-3 py-3 font-semibold hover:bg-gray-50"
          >
            Google
          </button>
          <button
            type="button"
            onClick={() => handleSocialLogin("github")}
            className="rounded-xl border px-3 py-3 font-semibold hover:bg-gray-50"
          >
            GitHub
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          {isSignup ? "আগে থেকেই অ্যাকাউন্ট আছে?" : "নতুন ব্যবহারকারী?"}{" "}
          <Link
            href={isSignup ? "/signin" : "/signup"}
            className="font-bold text-green-700"
          >
            {isSignup ? "লগইন করো" : "নিবন্ধন করো"}
          </Link>
        </p>
      </section>
    </main>
  );
}
