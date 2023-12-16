import { Link } from "react-router-dom";
import Env from "../assets/env.jpg";
export function CTAs() {
  return (
    <>
      <p className="text-center pb-4">
        AI Generated Product Descriptions For Your Ecommerce Store
      </p>
      <div className="flex flex-row space-x-3 justify-center align-middle ">
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/examples">
          <button>See Examples</button>
        </Link>
      </div>
      <div />
    </>
  );
}
