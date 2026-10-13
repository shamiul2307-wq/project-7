 "use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।");
      return;
    }

    if (password !== confirmPassword) {
      setError("পাসওয়ার্ড দুটি মিলছে না!");
      return;
    }

    setError(
      "ফর্ম সঠিক আছে। অ্যাকাউন্ট তৈরি করতে Authentication সংযুক্ত করতে হবে।"
    );
  };

  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card bg-base-100 w-full max-w-md shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="text-center text-base-content/60 mb-4">
            BazarDor-এ যোগ দিন এবং কেনাকাটা শুরু করুন
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">নাম</legend>
              <input
                type="text"
                name="name"
                placeholder="আপনার পুরো নাম"
                className="input input-bordered w-full"
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">ইমেইল</legend>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">পাসওয়ার্ড</legend>
              <input
                type="password"
                name="password"
                placeholder="কমপক্ষে ৬ অক্ষর"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                পাসওয়ার্ড নিশ্চিত করুন
              </legend>
              <input
                type="password"
                name="confirmPassword"
                placeholder="আবার পাসওয়ার্ড লিখুন"
                className="input input-bordered w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </fieldset>

            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-success"
                required
              />
              <span className="label-text">
                আমি শর্তাবলি ও গোপনীয়তা নীতি মেনে নিচ্ছি।
              </span>
            </label>

            {error && (
              <div role="alert" className="alert alert-info text-sm">
                <span>{error}</span>
              </div>
            )}

            <button type="submit" className="btn btn-success w-full">
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          <div className="divider">অথবা</div>

          <div className="flex flex-wrap justify-center gap-2">
            <button type="button" className="btn btn-outline btn-sm">
              Google দিয়ে সাইন আপ
            </button>

            <button type="button" className="btn btn-outline btn-sm">
              GitHub দিয়ে সাইন আপ
            </button>
          </div>

          <p className="text-center text-sm mt-4">
            আগে থেকেই অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/sign-in"
              className="link link-success font-semibold"
            >
              লগইন করুন
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}