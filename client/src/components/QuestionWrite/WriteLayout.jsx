import background from "/assets/image/backgroundQuestionWrite.svg";
import iconWrite from "/assets/image/iconWrite.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import {
  HeadlineDiv,
  Notice,
  Write,
  WriteGuide,
  PostButton,
  Null,
  WriteDiv,
} from "@/styles/QuestionWriteStyle";
import { Background } from "@/styles/RootStyle";
import { useDispatch } from "react-redux";
import { addQuestionFetch } from "@/store/slice/questionSlice";
import { useNavigate } from "react-router-dom";

const WriteLayout = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const submitHandle = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const text = e.target.content.value;
    const addQuestion = {
      memberId: 3,
      title,
      text,
    };
    dispatch(addQuestionFetch(addQuestion));
    nav("/Questions/List");
  };

  return (
    <Background>
      <Header />
      <div>
        <div>
          <HeadlineDiv>
            <h1>Ask a public question</h1>
            <img src={background} />
          </HeadlineDiv>
          <Null />
          <Notice>
            <h2>Writing a good question</h2>
            <div>
              <p>
                You’re ready to <span className="link">ask</span> a{" "}
                <span className="link">programming-related question</span> and
                this form will help guide you through the process.
              </p>
              <p>
                Looking to ask a non-programming question?{" "}
                <span className="link">See the topics here</span> to find a
                relevant site.
              </p>
            </div>
            <h5>Steps</h5>
            <ul>
              <li>Summarize your problem in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen.</li>
              <li>
                Add “tags” which help surface your question to members of the
                community.
              </li>
              <li>Review your question and post it to the site.</li>
            </ul>
          </Notice>

          <form onSubmit={submitHandle}>
            <WriteDiv>
              <Write>
                <label>Tltle</label>
                <p>
                  Be specific and imagine you’re asking a question to another
                  person.
                </p>
                <input
                  name="title"
                  type="text"
                  maxLength="300"
                  placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                />
              </Write>
              <WriteGuide>
                <h4>Writing a good title</h4>
                <div>
                  <img src={iconWrite} />
                  <div>
                    <p>Your title should summarize the problem.</p>
                    <p>
                      You might find that you have a better idea of your title
                      after writing out the rest of the question.
                    </p>
                  </div>
                </div>
              </WriteGuide>
            </WriteDiv>
            <WriteDiv>
              <Write>
                <label>What are the details of your problem?</label>
                <div>
                  <p>
                    Introduce the problem and expand on what you put in the
                    title. Minimum 20 characters.
                  </p>
                </div>
                <textarea name="content"></textarea>
              </Write>
              <WriteGuide>
                <h4>Introduce the problem</h4>
                <div>
                  <img src={iconWrite} />
                  <div>
                    <p>
                      Explain how you encountered the problem you’re trying to
                      solve, and any difficulties that have prevented you from
                      solving it yourself.
                    </p>
                  </div>
                </div>
              </WriteGuide>
            </WriteDiv>
            <PostButton type="submit">Post your question</PostButton>
            <Modal
              btnText="Discard question"
              subText="Are you sure you want to discard this question? This cannot be
              undone."
            />
          </form>
        </div>
        <Footer />
      </div>
    </Background>
  );
};

export default WriteLayout;
