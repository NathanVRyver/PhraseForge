import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkAuthStatus } from "../lib/Firebase";
import { Generator } from "../components";
import { Navbar, Footer } from "../components";

export function Demo() {
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
  const handleSignOut = () => {
    setIsAuthenticated(false); // Update the authentication state
  };
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
      <div className="flex-grow">
        <Generator />
      </div>
      <Footer />
    </div>
  );
}
