import { useState } from "react";
import { run } from "../Gemini";
export function Generator() {
  const [productName, setProductName] = useState("");
  const [productUse, setProductUse] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const onButtonClick = async () => {
    setLoading(true);
    try {
      const response = await run(productName, productUse);
      console.log(response);
      setLoading(false);
      setResult(response);
    } catch (error) {
      console.error("some error happened", error);
      setLoading(false);
    }
  };

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };
  const handleUseCaseChange = (e) => {
    setProductUse(e.target.value);
  };
  return (
    <>
      <form className="w-2/3 mx-auto">
        <div className="flex flex-col py-4">
          <label className="text-lg font-bold py-1 ">Product Name</label>
          <input
            type="text"
            name="productname"
            placeholder="Enter your product name"
            onChange={handleNameChange}
            className="p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col py-4">
          {" "}
          <label className="text-lg font-bold py-1 ">
            Product Main Use Case(s)
          </label>
          <input
            type="text"
            name="usecase"
            onChange={handleUseCaseChange}
            placeholder="Enter your product's use case"
            className="p-2 rounded-md"
          ></input>
        </div>
      </form>
      <button onClick={onButtonClick} id="outline-button">
        Generate a description
      </button>
      <br />
      <div>
        {!loading && result && <DescriptionContainer Description={result} />}
        {loading && <Loader />}
      </div>
    </>
  );
}
function DescriptionContainer({ Description }) {
  if (!Description) {
    return (
      <div>
        <h1>Your description was not generated, please try again.</h1>
      </div>
    );
  }
  return (
    <div className="w-2/3  mx-auto py-6">
      <h1 className="text-2xl font-bold py-2">Your Product Description:</h1>
      <p>{Description}</p>
    </div>
  );
}

function Loader() {
  return (
    <div className="py-6">
      <span className="loader "></span>
    </div>
  );
}
// TODO - TRAIN THE MODEL BETTER FOR MORE SEO OPTIMIZED RESULTS
