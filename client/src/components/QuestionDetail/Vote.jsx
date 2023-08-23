import { useState } from "react";
import { VoteForm } from "@/styles/QuestionDetail/VoteStyle";

const Vote = ({ vote }) => {
  const [voteCount, setVoteCount] = useState(vote);

  const handleVote = (prevote = 1) => {
    setVoteCount(prevote + 1);
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
