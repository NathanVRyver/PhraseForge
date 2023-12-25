import { useEffect, useState } from "react";
import { signUp, checkAuthStatus } from "../lib/Firebase";
import { Navbar, Footer } from "../components";
import { Navigate, useNavigate } from "react-router-dom";
export function SignUp() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await checkAuthStatus();
        setIsAuthenticated(true);
        navigate("/login");
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  const handleSignUp = async () => {
    try {
      const userCredential = await signUp(email, password);
      const user = userCredential.user;
      console.log("User signed up successfully!", user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing up:", errorCode, errorMessage);
    }
  };

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />{" "}
      <div className="max-w-md mx-auto mt-8 p-6  rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <label className="block text-sm font-medium text-white mb-1">
          Email:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-blue-500"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block text-sm font-medium text-white mb-1">
          Password:
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-blue-500"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
      <Footer />
    </>
  );
}
