import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`newCount: ${count}`);
  }, [count]);

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className="card">{count}</div>
      <button id="increment" data-testid="incrementBtn" onClick={handleCount}>
        Increment
      </button>
    </>
  );
}

export default App;
