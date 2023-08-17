import Header from "@/components/Header";
import SignUpForm from "@/components/SignupForm";
import { PageContainer } from "@/styles/Signup/SignupPageStyle";

const SignUpPage = () => {
  return (
    <>
      <Header smallSidebar="small" />
      <PageContainer>
        <div className="itemcontainer">
          <div className="headline">Join the Stack Overflow community</div>
          <div className="item">
            <img src="src/assets/image/unstruck.svg" alt="unstruck"></img>
            Get unstruck — ask a question
          </div>
          <div className="item">
            <img src="src/assets/image/unlock.svg" alt="unlock"></img>
            Unlock new privileges like voting and commenting
          </div>
          <div className="blockitem">
            <img src="src/assets/image/save.svg" alt="earn"></img>
            Save your favorite questions, answers, watch tags, and more
          </div>

          <div className="item">
            <img src="src/assets/image/earn.svg" alt="earn"></img>Earn
            reputation and badges
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
