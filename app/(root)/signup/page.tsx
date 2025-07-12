'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', gender: '' });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/signup', form);
      router.push('/login');
    } catch (err: any) {
      if (typeof window !== 'undefined') {
        alert(err.response?.data?.message || 'Something went wrong');
      }
    }
  };

  return (
    <div className="nice_background">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md text-gray-800">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-2">Join SwapHub</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Create your free account to start swapping!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <select
            value={form.gender}
            onChange={e => setForm({ ...form, gender: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-500 focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-green-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
