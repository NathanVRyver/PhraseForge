export function Hero() {
  return (
    <div className="py-48 hero">
      <h1 className="text-center text-6xl font-black py-5 w-full">
        Focus On What Really Matters{" "}
      </h1>
      <p className="text-center">
        AI Generated Product Descriptions For Your Ecommerce Store
      </p>
      <div className="flex flex-row space-x-3 justify-center align-middle py-10">
        <a href="/signup">
          <button>Sign Up</button>
        </a>
        <a href="/examples">
          <button>See Examples</button>
        </a>
      </div>
    </div>
  );
}
