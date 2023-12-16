import { useState } from "react";
import { signIn } from "../lib/Firebase";
import { Navbar, Footer } from "../components";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      console.log("User is now authenticated");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-8 p-6  rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <label className="block text-sm font-medium text-white mb-1">
          Email:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-blue-500"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block text-sm font-medium text-gray mb-1">
          Password:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-blue-500"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>

      <Footer />
    </>
  );
}
