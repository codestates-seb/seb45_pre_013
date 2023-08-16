import { VoteForm } from "@/styles/QuestionDetail/VoteStyle";

const Vote = ({ vote }) => {
  return (
    <VoteForm>
      <button>▲</button>
      <p>{vote}</p>
      <button>▼</button>
    </VoteForm>
  );
};

export default Vote;
