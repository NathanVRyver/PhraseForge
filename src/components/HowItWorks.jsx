export function HowItWorks() {
  return (
    <div>
      <h1>Writing Product Descriptions Has Never Been Easier.</h1>
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
        />
        <ExplainerCard
          header="Enter Product Information"
          description="Once logged in, enter your
          product name and main use case(s). This information helps PhraseForge
          tailor its AI-generated descriptions to your specific needs."
        />
        <ExplainerCard
          header="Generate Descriptions:"
          description='Hit the "Generate" button, and
          let our advanced AI algorithms create compelling and unique product
          descriptions for your eCommerce store.'
        />
      </div>
    </div>
  );
}

function ExplainerCard({ header, description }) {
  return (
    <div className="bg-gradient-to-r from-[#0d1a2880] from-10% via-[#01074c80] via-30% to-[#06011680] to-90%  rounded-md m-8 p-6 ">
      <h1 className="text-xl font-bold">{header}</h1>
      <p className="text-md font-medium">{description}</p>
    </div>
  );
}
