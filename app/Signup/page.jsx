"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase.js";

const Page = () => {
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize useRouter

  const signUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const authInstance = getAuth();
      const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
      const user = userCredential.user;

      await db.collection('users').doc(user.email).set({
        email: user.email,
        password: password
      });

      console.log("User created successfully");

      // Redirect to /Home
      router.push('/Home');
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: "url('/images/piotr-szulawski-XjR-Y8PKeww-unsplash.jpg')" }}>
      <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-8">
        <div className="w-full max-w-screen-sm space-y-6">
          <div className="space-y-2">
            <form id="signup-form" onSubmit={signUp} >
              <h2 className="text-2xl font-bold py-8">Sign Up</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="m@example.com" required style={{ color: 'black' }} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password">Password</label>
                  <input id="password" name="password" type="password" required style={{ color: 'black' }} />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="w-full">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
