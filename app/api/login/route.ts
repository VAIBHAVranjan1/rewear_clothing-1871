// app/api/login/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('vaibhav'); // ✅ Your DB name
    const usersCollection = db.collection('vaibhav'); // ✅ Your collection name

    const user = await usersCollection.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Incorrect password' }, { status: 401 });
    }

    // You can optionally return token/session data here
    return NextResponse.json({
      message: 'Login successful',
      user: {
        name: user.name,
        email: user.email,
        gender: user.gender,
      }
    }, { status: 200 });
  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
