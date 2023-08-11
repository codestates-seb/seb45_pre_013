import { styled } from "styled-components";

const VoteForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;

  button {
    width: 40px;
    height: 40px;
    margin: 2px;
    border-radius: 50%;
    border: 1px solid var(--black-100);
    color: var(--black-700);
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 32px;
    color: var(--black-800);
  }
`;

const Vote = () => {
  return (
    <VoteForm>
      <button>▲</button>
      <p>0</p>
      <button>▼</button>
    </VoteForm>
  );
};

export default Vote;
