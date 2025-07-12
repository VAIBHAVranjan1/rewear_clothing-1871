// app/api/signup/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, gender } = body;

    if (!name || !email || !password || !gender) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('vaibhav');
    const usersCollection = db.collection('vaibhav');

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      gender,
      createdAt: new Date(),
    };

    await usersCollection.insertOne(newUser);

    return NextResponse.json({ message: 'Account created successfully' }, { status: 201 });
  } catch (error: any) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
