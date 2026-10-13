
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (session?.user?.name) setName(session.user.name);

    if (!isPending && !session) {
      router.replace("/signin");
    }
  }, [session, isPending, router]);

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);

    try {
      const result = await authClient.updateUser({ name: name.trim() });

      if (result.error) {
        toast.error(result.error.message || "আপডেট করা যায়নি");
        return;
      }

      toast.success("প্রোফাইল আপডেট হয়েছে");
      await authClient.getSession();
      router.push("/profile");
      router.refresh();
    } catch {
      toast.error("একটি সমস্যা হয়েছে");
    } finally {
      setSaving(false);
    }
  }

  if (isPending || !session) {
    return <main className="p-12 text-center">লোড হচ্ছে...</main>;
  }

  return (
    <main className="mx-auto min-h-[65vh] max-w-xl px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-3xl bg-white p-8 shadow"
      >
        <h1 className="text-3xl font-black">তথ্য আপডেট</h1>

        <div>
          <label htmlFor="name" className="mb-2 block font-semibold">
            নাম
          </label>
          <input
            id="name"
            required
            minLength={2}
            maxLength={80}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-xl border px-4 py-3"
          />
        </div>

        <button
          disabled={saving}
          className="w-full rounded-xl bg-green-700 px-4 py-3 font-bold text-white disabled:opacity-60"
        >
          {saving ? "আপডেট হচ্ছে..." : "তথ্য আপডেট করুন"}
        </button>
      </form>
    </main>
  );
}
