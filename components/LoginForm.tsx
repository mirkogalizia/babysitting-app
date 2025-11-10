import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

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
  );
}
