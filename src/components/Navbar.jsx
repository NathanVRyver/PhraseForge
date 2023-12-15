import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="justify-center flex pb-8 navbar">
      <Link to="/">
        {" "}
        <h1 className="text-2xl font-bold">PhraseForge</h1>
      </Link>
    </div>
  );
}
