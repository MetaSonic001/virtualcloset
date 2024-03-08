"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

export default function Login() {
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize useRouter

  const signIn = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.username.value;
    const password = form.password.value;

    try {
      const authInstance = getAuth();
      await signInWithEmailAndPassword(authInstance, email, password);

      // Redirect to /Home upon successful login
      router.push('/Home');
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <img
        alt="Image"
        className="absolute inset-0 object-cover w-full h-full"
        src="/images/micheile-henderson-FpPcoOAk5PI-unsplash.jpg"
        style={{
          aspectRatio: "1440/600",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-6">
          <div className="grid max-w-md px-4 text-center gap-4">
            <div className="space-y-2 text-black">
              <h1 className="text-4xl font-semibold tracking-tighter text-black">Welcome to Virtual Closet</h1>
              <p className="text-black-500 dark:text-black-400">
                Enter your username and password to access your account
              </p>
            </div>
            <form onSubmit={signIn} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-black">Username</label>
                <input id="username" name="username" type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black" placeholder="Username" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-black">Password</label>
                <input id="password" name="password" type="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black" placeholder="Password" required />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md" type="submit">Login</button>
            </form>
            <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-md" type="button">Login with Google</button>
            <div className="text-sm text-black">
              <a href="#">
                <span className="underline">Forgot your password?</span>
              </a>
            </div>
            <div className="text-sm text-black">
                Don&apos;t have an account?
              <Link href="/Signup">
                <span className="underline cursor-pointer">Create an account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}