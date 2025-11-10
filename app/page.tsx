// app/page.tsx
"use client";
import React, { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSignup = async () => {
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setStatus("Registrazione avvenuta con successo!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogin = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setStatus("Login effettuato con successo!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-100 flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-2">
          Benvenuto nella Babysitting App
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Prenota una babysitter professionale, gestita dal nostro team!
        </p>
        <div className="flex flex-col gap-2 p-4 bg-white rounded-xl shadow">
          <input
            type="email"
            placeholder="Email"
            className="border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-2 mt-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleLogin}>
              Login
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={handleSignup}>
              Signup
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {status && <p className="text-green-600 mt-2">{status}</p>}
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <span className="font-medium text-gray-700 text-center">
            Provalo ora: seleziona giorno, fascia oraria e preferenze!
          </span>
          <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-xl w-full">
            Scopri il Calendario
          </button>
        </div>
      </div>
      <footer className="text-xs text-gray-400 mt-8">
        &copy; 2025 Babysitting App - Mirko Galizia
      </footer>
    </main>
  );
}


