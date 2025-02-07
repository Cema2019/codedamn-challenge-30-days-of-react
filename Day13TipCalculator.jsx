
/*In this lab, you'll be creating a simple React application - a Tip Calculator. 
This app will calculate the total bill amount based on the user's input for the bill amount and the desired tip percentage.*/

import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState("");

  const handleBill = (e) => {
    setBill(e.target.value);
  };

  const handleTip = (e) => {
    setTip(e.target.value);
  };

  const calculateTotal = () => {
    const billAmountNum = parseFloat(bill);
    const tipPercentageNum = parseFloat(tip);

    const totalAmount =
      billAmountNum + (billAmountNum * tipPercentageNum) / 100;

    setTotal(totalAmount.toFixed(2));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div>
        <label htmlFor="billAmount">Bill Amount: </label>
        <input
          id="billAmount"
          type="number"
          value={bill}
          onChange={handleBill}
        />
      </div>
      <div>
        <label htmlFor="billAmount">Tip percent: </label>
        <input id="tipPercent" type="number" value={tip} onChange={handleTip} />
      </div>

      <button id="calculateAmount" onClick={calculateTotal}>
        Calculate
      </button>
      <p id="totalAmount">{total}</p>
    </div>
  );
}
