import React, { useState } from "react";
import { VoteForm } from "@/styles/QuestionDetail/VoteStyle";

const Vote = ({ vote }) => {
  const [voteCount, setVoteCount] = useState(vote);

  const handleVote = (prevote) => {
    setVoteCount(voteCount + prevote);
  };

  return (
    <VoteForm>
      <button onClick={() => handleVote(1)}>▲</button>
      <p>{voteCount}</p>
      <button onClick={() => handleVote(-1)}>▼</button>
    </VoteForm>
  );
};

export default Vote;
