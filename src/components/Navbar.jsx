import { Link } from "react-router-dom";
import { signOutUser } from "../lib/Firebase";

export function Navbar({ isAuthenticated, onSignOut }) {
  const handleSignOut = async () => {
    await signOutUser();
    onSignOut(); // Call the callback function to update the state
  };

  return (
    <div className="flex justify-between items-center pb-8 navbar">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">PhraseForge</h1>
        </Link>
      </div>
      <div className="flex space-x-3">
        {isAuthenticated ? (
          <>
            <Link to="/demo" className="mx-2">
              <button id="outline-button">Demo</button>
            </Link>
            <button onClick={handleSignOut} id="button">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mx-2">
              <button id="outline-button">Login</button>
            </Link>
            <Link to="/signup" className="mx-2">
              <button id="button">Signup</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
