// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="nice_background">
      <div className="bg-white text-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to MyApp</h1>
        <p className="mb-8 text-gray-600">Please choose an option to continue.</p>

        <div className="flex flex-col gap-4">
          <Link href="/login">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl transition">
              Log In
            </button>
          </Link>

          <Link href="/signup">
            <button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-100 font-semibold py-2 rounded-xl transition">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
