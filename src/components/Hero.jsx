import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="py-48 hero">
      <h1 className="text-center text-6xl font-black py-5 w-full">
        Focus On What <span className="headliner"> Really Matters </span>
      </h1>
      <p className="text-center">
        AI Generated Product Descriptions For Your Ecommerce Store
      </p>
      <div className="flex flex-row space-x-3 justify-center align-middle py-10">
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/examples">
          <button>See Examples</button>
        </Link>
      </div>
    </div>
  );
}
