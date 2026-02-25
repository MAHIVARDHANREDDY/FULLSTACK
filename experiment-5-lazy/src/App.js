import React, { lazy, Suspense, useState } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lazy Loading Performance Optimization</h1>

      <button onClick={() => setShow(true)}>
        Load Heavy Component
      </button>

      {show && (
        <Suspense fallback={<p>Loading component...</p>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;