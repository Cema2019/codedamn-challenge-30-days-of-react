/*In this lab, you will create a simple currency converter application using React. 
This app will allow users to convert a value from one currency to another by fetching real-time exchange rates from an API.*/

import { useState } from "react";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const handleConvert = async () => {
    if (!fromCurrency || !toCurrency) {
      alert("Please select both currencies");
      return;
    }

    try {
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${fromCurrency}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      const rate = data.rates[toCurrency];

      if (rate) {
        const convertedAmount = amount * rate;
        document.getElementById(
          "currencyValue"
        ).innerText = `Converted Value: ${toCurrency} ${convertedAmount.toFixed(
          2
        )}`;
      } else {
        alert(`Exchange rate for ${toCurrency} not found`);
      }
    } catch (error) {
      alert("Error fetching conversion data");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h2>Convert your currency</h2>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <input
        type="text"
        id="from"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value.toUpperCase())}
        maxLength="3"
        placeholder="From: e.g., EUR"
      />
      <input
        type="text"
        id="to"
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value.toUpperCase())}
        maxLength="3"
        placeholder="To: e.g., USD"
      />
      <button id="convert" onClick={handleConvert}>
        Convert
      </button>
      <div id="currencyValue"></div>
    </div>
  );
}
