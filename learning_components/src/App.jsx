import React, { useState } from "react";

function App() {
  const [brand, setBrand] = useState("Ford");
  const [isActive, setIsActive] = useState(false);

  const changeBrand = () => {
    setBrand("BMW");
    setIsActive(true);
  };

  return (
    <div>
      <h1>My Car</h1>
      <h1>{brand}</h1>

      <button
        onClick={changeBrand}
        style={{
          backgroundColor: isActive ? "green" : "blue",
          color: "white",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isActive ? "Brand Changed" : "Change Brand"}
      </button>
    </div>
  );
}

export default App;