import SignUp from "../assets/SignUp.jpg";
import Enjoy from "../assets/Enjoy.jpg";
import Wait from "../assets/Wait.jpg";
import Robot from "../assets/robott.png";
import {
  UserPlusIcon,
  ClipboardDocumentIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";

export function HowItWorks() {
  return (
    <div>
      <New />
    </div>
  );
}

const features = [
  {
    name: "Sign up.",
    description:
      "Get started by creating your free account on PhraseForge. Simply click the Sign Up button and follow the easy registration process.",
    icon: UserPlusIcon,
  },
  {
    name: "Enter product information.",
    description:
      "Once logged in, enter your product name and main use case(s). This information helps PhraseForge  tailor its AI-generated descriptions to your specific needs.",
    icon: ClipboardDocumentIcon,
  },
  {
    name: "Generate descriptions",
    description:
      "Hit the Generate button, and let our advanced AI algorithms create compelling and unique product  descriptions for your eCommerce store.",
    icon: CheckIcon,
  },
];

export function New() {
  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Writing <span className="headliner">Winning</span> Product
                Descriptions Has Never Been Easier.
              </p>
              <p className="mt-6 text-lg leading-8 text-white">
                Say goodbye to wasting time on your product descriptions. With
                PhraseForge, the process is streamlined and efficient:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-50 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-[#121fcf]"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={Robot}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

/**
 *  <ExplainerCard
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
 */
