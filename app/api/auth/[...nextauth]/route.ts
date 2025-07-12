import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs"; // For password hashing
import { getUserByEmail } from "@/lib/db"; // Your DB helper

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = await getUserByEmail(email); // Fetch user from DB
        
        if (!user || !(await compare(password, user.password))) {
          return null; // Invalid credentials
        }
        return { id: user.id, email: user.email }; // Return user object
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
});