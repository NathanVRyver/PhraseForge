// App.js
import React, { useEffect, useState } from "react";
import { checkAuthStatus } from "./lib/Firebase";
import { Navbar, Hero, CTAs, HowItWorks, Footer } from "./components";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await checkAuthStatus().then(() => setIsAuthenticated(true));
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleSignOut = () => {
    setIsAuthenticated(false); // Update the authentication state
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="">
        <Navbar isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
        <Hero />
      </div>
      <CTAs />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
