import { Link } from "react-router-dom";
export function Footer() {
  return (
    <div>
      <Link to="/">
        <h1 className="text-2xl font-bold">PhraseForge</h1>
      </Link>
      <h1 className="text-lg">PhraseForge, All Rights Reserved</h1>
    </div>
  );
}
