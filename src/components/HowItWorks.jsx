import SignUp from "../assets/SignUp.jpg";
import Enjoy from "../assets/Enjoy.jpg";
import Wait from "../assets/Wait.jpg";

export function HowItWorks() {
  return (
    <div>
      <h1 className="py-4">
        Writing <span className="headliner">Winning</span> Product Descriptions
        Has Never Been Easier.
      </h1>
      <p>
        Say goodbye to wasting time on your product descriptions. With
        PhraseForge, the process is streamlined and efficient:
      </p>

      <div className="grid grid-cols-3">
        <ExplainerCard
          header="Sign Up"
          description='Get started by creating your free account on
          PhraseForge. Simply click the "Sign Up" button and follow the easy
          registration process.'
          image={SignUp}
        />
        <ExplainerCard
          header="Enter Product Information"
          description="Once logged in, enter your
          product name and main use case(s). This information helps PhraseForge
          tailor its AI-generated descriptions to your specific needs."
          image={Wait}
        />
        <ExplainerCard
          header="Generate Descriptions"
          description='Hit the "Generate" button, and
          let our advanced AI algorithms create compelling and unique product
          descriptions for your eCommerce store.'
          image={Enjoy}
        />
      </div>
    </div>
  );
}

function ExplainerCard({ header, description, image }) {
  return (
    <div className="border border-[#408CDE] rounded-md m-8 p-6 ">
      <img src={image} alt="How it works" />
      <h1 className="text-xl font-bold py-4">{header}</h1>
      <p className="text-md font-medium">{description}</p>
    </div>
  );
}
