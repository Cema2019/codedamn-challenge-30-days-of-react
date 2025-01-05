import React, { useState } from "react";

type QuestionType = {
  question: string;
  questionDescription: string;
  options: string[];
  answer: number[];
  explanation: string;
  answerQuestion: (index: number) => void;
};

export default function Question({
  question,
  questionDescription,
  options,
  explanation,
  answerQuestion,
}: QuestionType) {
  const [isAnswered, setIsAnswered] = useState(false);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>{question}</h3>
      <p style={{ marginBottom: "15px" }}>{questionDescription}</p>

      <div>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              answerQuestion(index);
              setIsAnswered(true);
            }}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              margin: "5px 0",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
