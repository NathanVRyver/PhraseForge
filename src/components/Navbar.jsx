import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="flex justify-between items-center pb-8 navbar">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">PhraseForge</h1>
        </Link>
      </div>
      <div className="flex space-x-3">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/demo">
          <button id="generate-button">Generate</button>
        </Link>
      </div>
    </div>
  );
}
