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
              Demo
            </Link>
            <button onClick={handleSignOut}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mx-2">
              Login
            </Link>
            <Link to="/signup" className="mx-2">
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
