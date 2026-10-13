


 export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 shadow-xl p-8">
        <h1 className="text-2xl font-bold">লগইন করুন</h1>
        <input
          type="email"
          placeholder="ইমেইল"
          className="input input-bordered mt-4"
        />
        <input
          type="password"
          placeholder="পাসওয়ার্ড"
          className="input input-bordered mt-3"
        />
        <button className="btn btn-success mt-4">লগইন</button>
      </div>
    </main>
  );
}
