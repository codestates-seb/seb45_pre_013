import { styled } from "styled-components";
import background from "@/assets/image/backgroundQuestionWrite.svg";

const HeadlineDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1051px;
  height: 130px;

  h1 {
    width: 100%;
    font-size: var(--fs-headline1);
    font-weight: 800;
    margin-top: 24px;
    margin-bottom: 27px;
  }

  img {
    height: 130px;
  }
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1051px;

  @media (max-width: 1265px) {
    width: calc(100vw - 214px);
  }
`;

const Background = styled.div`
  background-color: var(--black-025);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const QuestionWrite = () => {
  return (
    <Background>
      <Div>
        <HeadlineDiv>
          <h1>Ask a public question</h1>
          <img src={background} />
        </HeadlineDiv>
      </Div>
    </Background>
  );
};

export default QuestionWrite;
