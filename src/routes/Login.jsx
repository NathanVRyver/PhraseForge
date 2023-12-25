import { useEffect, useState } from "react";
import { signIn, checkAuthStatus } from "../lib/Firebase";
import { Navbar, Footer } from "../components";
import { Navigate, useNavigate } from "react-router-dom";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [InvalidCreds, setInvalidCreds] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signIn(email, password);
      console.log("User is now authenticated");
      navigate("/demo");
    } catch (error) {
      console.error(error.message);
      setInvalidCreds(true);
    }
  };

  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await checkAuthStatus();
        setIsAuthenticated(true);
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
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />{" "}
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
        <button id="button" onClick={handleLogin}>
          Login
        </button>
        {InvalidCreds && (
          <div className="py-4">
            <h1
              className="text-red-600 text-sm
            "
            >
              Invalid email and/or password
            </h1>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
