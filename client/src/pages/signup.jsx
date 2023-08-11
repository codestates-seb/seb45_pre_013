import React from "react";
import styled from "styled-components";
import SignUpForm from "../components/signupForm";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--black-050);

  a {
    vertical-align: baseline;
    color: var(--blue);
    overflow: hidden;
    word-break: break-all;
    cursor: pointer;
  }

  p {
    margin: 2px;
    padding: 2px;
    color: var(--black);
    font-size: 12px;
  }

  .itemcontainer {
    display: flex;
    flex-direction: column;
    width: 421px;
    height: 327px;
    /* background-color: royalblue; */
    margin: auto;
  }

  .join {
    width: 421px;
    height: 54px;
    font-size: 27px;
    margin-bottom: auto;
    font-weight: 400;
  }

  .item {
    width: 421px;
    height: 24px;
    margin: auto;
    font-size: var(--fs-base);
  }

  .item2 {
    width: 421px;
    height: 34px;
    font-size: 13px;
    color: var(--black-400);
  }

  .item img {
    color: var(--blue-500) !important;
    margin-right: 5px;
  }
`;

const SignUpPage = () => {
  return (
    <>
      <PageContainer>
        <div className="itemcontainer">
          <div className="join">Join the Stack Overflow community</div>
          <div className="item">
            <img src="src/asset/image/unstruck.svg" alt="earn"></img>
            Get unstruck — ask a question
          </div>
          <div className="item">
            <img src="src/asset/image/unlock.svg" alt="earn"></img>
            Unlock new privileges like voting and commenting
          </div>
          <div className="item">
            <img src="src/asset/image/save.svg" alt="earn"></img>Save your
            favorite questions, answers, watch tags, and more
          </div>
          <div className="item">
            <img src="src/asset/image/earn.svg" alt="earn"></img>Earn reputation
            and badges
          </div>
          <div className="item2">
            Collaborate and share knowledge with a private group for FREE.
            <br />
            <a href="">Get Stack Overflow for Teams free for up to 50 users.</a>
          </div>
        </div>
        <SignUpForm />
      </PageContainer>
    </>
  );
};

export default SignUpPage;
