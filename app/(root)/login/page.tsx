'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('/api/login', form);
      router.push('/');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="nice_background">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md text-gray-800">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-2">Welcome Back</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Log in to continue swapping sustainably!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-sm text-center space-y-2">
          <Link href="/forgot-password" className="text-green-600 hover:underline block">
            Forgot Password?
          </Link>
          <span>
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-green-600 hover:underline">
              Join now
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
