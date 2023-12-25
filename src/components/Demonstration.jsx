import Fitness from "../assets/examples/1.webp";
import Bottle from "../assets/examples/2.jpeg";
import Headphones from "../assets/examples/3.png";
import Coffee from "../assets/examples/4.jpg";
import Laptop from "../assets/examples/5.jpg";
import "../App.css";

export function Demonstration() {
  const example = [
    {
      Product: "Smart Fitness Tracker",
      Description:
        "Elevate your fitness journey with the Smart Fitness Tracker – a cutting-edge wearable designed to seamlessly integrate with your active lifestyle. This sleek device not only monitors your daily activities and tracks workouts but also provides real-time health insights to empower your wellness goals. Stay motivated with personalized fitness recommendations and receive notifications right on the vibrant OLED screen. With its intuitive design and advanced features, the Smart Fitness Tracker is more than a device; it's a fitness revolution.",
      Image: Fitness,
    },
    {
      Product: "Eco-Friendly Reusable Water Bottle",
      Description:
        "Embrace sustainability in style with our Eco-Friendly Reusable Water Bottle. Crafted from premium BPA-free materials, this chic bottle not only helps you stay hydrated on the go but also makes a bold statement against single-use plastics. The spill-proof design ensures a mess-free experience, while the array of vibrant colors adds a touch of personality to your eco-conscious lifestyle. Join the movement, sip responsibly, and make every hydration moment an expression of your commitment to a greener planet.",
      Image: Bottle,
    },
    {
      Product: "Noise-Canceling Bluetooth Headphones",
      Description:
        "Immerse yourself in pure auditory bliss with our Noise-Canceling Bluetooth Headphones. Engineered for unparalleled comfort and crystal-clear sound, these headphones redefine the way you experience music. Whether you're commuting, working, or just relaxing, the advanced noise-canceling technology lets you escape into your own world of sound. The wireless convenience and extended battery life make these headphones a must-have for those who demand premium audio quality without compromise.",
      Image: Headphones,
    },
  ];
  const Example2 = [
    {
      Product: "Portable Espresso Maker",
      Description:
        "Unleash the barista within with our Portable Espresso Maker – a compact marvel that brings the cafe experience to your fingertips. No more compromises on your coffee ritual; this lightweight device lets you indulge in rich, bold espresso wherever your adventures take you. The simplicity of adding coffee grounds and hot water is complemented by the sophisticated engineering that ensures every sip is a celebration of flavor. Elevate your coffee moments with the freedom to brew perfection on your terms.",
      Image: Coffee,
    },
    {
      Product: "Multi-Function Laptop Stand",
      Description:
        "Transform your workspace with our Multi-Function Laptop Stand – a sleek solution that combines functionality with elegance. Designed for both comfort and productivity, this adjustable stand offers a range of height and angle options to create your ideal working environment. Say goodbye to discomfort and overheating as you elevate your laptop to a new level of efficiency. Whether you're a remote worker or a student, this stand is the epitome of style and support, making every task a seamless and enjoyable experience.",
      Image: Laptop,
    },
  ];

  return (
    <>
      <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {example.map((product, index) => (
          <div
            key={index}
            className="border p-4 space-y-4 rounded-lg border-[#007bff80]"
          >
            <div className="image-container-examples2">
              <img src={product.Image} alt="product image" />
            </div>
            <h2 className="text-lg font-semibold text-[#408cde] mb-2">
              {product.Product}
            </h2>
            <p>{product.Description}</p>
          </div>
        ))}
      </div>
      <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Example2.map((product, index) => (
          <div
            key={index}
            className="border p-4 space-y-4 rounded-lg border-[#007bff80]"
          >
            <div className="image-container-examples1">
              <img src={product.Image} alt="product image" />
            </div>
            <h2 className="text-lg font-semibold mb-2 text-[#408cde]">
              {product.Product}
            </h2>
            <p>{product.Description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
