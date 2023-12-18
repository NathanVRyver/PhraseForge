import { Link } from "react-router-dom";
import Env from "../assets/env.jpg";
export function CTAs() {
  return (
    <>
      <p className="text-center text-3xl font-black pb-4">
        Unleash the Power of{" "}
        <span className="headliner2"> AI Descriptions </span>{" "}
      </p>
      <p className="text-center text-lg pb-4">
        Welcome to PhraseForge, your secret weapon for crafting compelling
        e-commerce product descriptions effortlessly. Our powerful AI-driven
        platform takes the guesswork out of creating engaging content, allowing
        you to focus on what you do best – growing your business.
      </p>
      <div className="flex flex-row space-x-3 justify-center align-middle ">
        <Link to="/signup">
          <button id="button">Sign Up</button>
        </Link>
        <Link to="/examples">
          <button id="outline-button">See Examples</button>
        </Link>
      </div>
      <div />
    </>
  );
}
