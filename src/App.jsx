"use strict";
import { useState } from "react";
import { run } from "./Gemini";
import "./App.css";

function App() {
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
    console.log(productName);
  };
  const handleUseCaseChange = (e) => {
    setProductUse(e.target.value);
    console.log(productUse);
  };
  return (
    <>
      <div>Ecommerce Product Descriptions</div>
      <form>
        <label>Product Name</label>
        <input
          type="text"
          name="productname"
          placeholder="Enter your product name"
          onChange={handleNameChange}
        ></input>
        <label>Product Main Use Case(s)</label>
        <input
          type="text"
          name="usecase"
          onChange={handleUseCaseChange}
          placeholder="Enter your use case name"
        ></input>
      </form>
      <button onClick={onButtonClick}>Generate a description</button>
    </>
  );
}

export default App;
