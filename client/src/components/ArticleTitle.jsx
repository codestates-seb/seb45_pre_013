import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    width: calc(100% - 105px);
    display: flex;
    font-size: var(--fs-headline1);
    flex-wrap: wrap;
  }

  button {
    width: 100px;
    height: 35px;
    border-radius: 6px;
    background-color: var(--blue-500);
    color: var(--white);
  }
`;

const ArticleTitle = ({ title }) => {
  return (
    <Div>
      <h1>{title}</h1>
      <button>Ask Question</button>
    </Div>
  );
};

export default ArticleTitle;
