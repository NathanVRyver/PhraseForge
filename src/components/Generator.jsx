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
      <form>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            name="productname"
            placeholder="Enter your product name"
            onChange={handleNameChange}
          ></input>
        </div>
        <div>
          <label>Product Main Use Case(s)</label>
          <input
            type="text"
            name="usecase"
            onChange={handleUseCaseChange}
            placeholder="Enter your use case name"
          ></input>
        </div>
      </form>
      <button onClick={onButtonClick}>Generate a description</button>
    </>
  );
}
