import { Navbar, Footer, Demonstration } from "../components";
import { checkAuthStatus } from "../lib/Firebase";
import { useEffect, useState } from "react";
export function Examples() {
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
  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />{" "}
      <Demonstration />
      <Footer />
    </div>
  );
}
