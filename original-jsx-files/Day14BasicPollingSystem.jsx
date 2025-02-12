/*Your task is to build a simple polling system using React. 
This will be a straightforward single component app where users can view a question and vote on one of the available options.

The objective of this lab is to Implement a system with a question and multiple-choice answers where users can vote.*/

import { useState } from "react";

export default function PollComponent() {
  const [vote1, setVote1] = useState(0);
  const [vote2, setVote2] = useState(0);
  const [vote3, setVote3] = useState(0);
  const [vote4, setVote4] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4 id="question">Choose your option</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "150px",
        }}
      >
        <button className="option" onClick={() => setVote1(vote1 + 1)}>
          <span>Option1</span> Votes: <span>{vote1}</span>
        </button>
        <button className="option" onClick={() => setVote2(vote2 + 1)}>
          <span>Option2</span> Votes: <span>{vote2}</span>
        </button>
        <button className="option" onClick={() => setVote3(vote3 + 1)}>
          <span>Option3</span> Votes: <span>{vote3}</span>
        </button>
        <button className="option" onClick={() => setVote4(vote4 + 1)}>
          <span>Option4</span> Votes: <span>{vote4}</span>
        </button>
      </div>
    </div>
  );
}

