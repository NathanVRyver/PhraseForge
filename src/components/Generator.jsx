import { useState } from "react";
import { run } from "../Gemini";
export function Generator() {
  const [productName, setProductName] = useState("");
  const [productUse, setProductUse] = useState("");
  const onButtonClick = async () => {
    try {
      const response = await run(productName, productUse);
      console.log(response);
    } catch (error) {
      console.error("some error happened", error);
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
      <div className="text-6xl font-bold py-7">Give it a try!</div>
      <form>
        <div>
          <label className="text-xl font-medium p-6">Product Name:</label>
          <input
            type="text"
            name="productname"
            placeholder="Enter your product name"
            onChange={handleNameChange}
            className="m-4  p-1 rounded-sm"
          ></input>
        </div>
        <div>
          <label className="text-xl font-medium p-6">
            Product Main Use Case(s):
          </label>
          <input
            type="text"
            name="usecase"
            onChange={handleUseCaseChange}
            placeholder="Enter your use case name"
            className="m-4  p-1 rounded-sm"
          ></input>
        </div>
      </form>
      <button onClick={onButtonClick}>Generate </button>
    </>
  );
}
