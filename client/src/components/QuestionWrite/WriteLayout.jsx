import background from "@/assets/image/backgroundQuestionWrite.svg";
import iconWrite from "@/assets/image/iconWrite.png";
import {
  Background,
  Div,
  HeadlineDiv,
  Notice,
  Write,
  WriteGuide,
  PostButton,
  Null,
} from "@/styles/QuestionWriteStyle";

const WriteLayout = () => {
  return (
    <Background>
      <Div>
        <HeadlineDiv>
          <h1>Ask a public question</h1>
          <img src={background} />
        </HeadlineDiv>
        <Null />
        <Notice>
          <h2>Writing a good question</h2>
          <div>
            <p>
              You’re ready to <span className="link">ask</span> a
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
        <WriteGuide>
          <h4>Writing a good title</h4>
          <div>
            <img src={iconWrite} />
            <div>
              <p>Your title should summarize the problem.</p>
              <p>
                You might find that you have a better idea of your title after
                writing out the rest of the question.
              </p>
            </div>
          </div>
        </WriteGuide>
        <Write>
          <label>Tltle</label>
          <p>
            Be specific and imagine you’re asking a question to another person.
          </p>
          <input
            type="text"
            maxLength="300"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          />
        </Write>
        <WriteGuide>
          <h4>Introduce the problem</h4>
          <div>
            <img src={iconWrite} />
            <div>
              <p>
                Explain how you encountered the problem you’re trying to solve,
                and any difficulties that have prevented you from solving it
                yourself.
              </p>
            </div>
          </div>
        </WriteGuide>
        <Write>
          <label>What are the details of your problem?</label>
          <div>
            <p>
              Introduce the problem and expand on what you put in the title.
              Minimum 20 characters.
            </p>
          </div>
          <textarea></textarea>
        </Write>
        <WriteGuide>
          <h4>Expand on the problem</h4>
          <div>
            <img src={iconWrite} />
            <div>
              <p>
                Show what you’ve tried, tell us what happened, and why it didn’t
                meet your needs.
              </p>
              <p>
                Not all questions benefit from including code, but if your
                problem is better understood with code you’ve written, you
                should include a{" "}
                <span className="link">minimal, reproducible example.</span>
              </p>
              <p>
                Please make sure to post code and errors as text directly to the
                question (and <span className="link">not as images</span>
                ), and <span className="link">format them appropriately.</span>
              </p>
            </div>
          </div>
        </WriteGuide>
        <Write>
          <label>What did you try and what were you expecting?</label>
          <div>
            <p>
              Describe what you tried, what you expected to happen, and what
              actually resulted. Minimum 20 characters.
            </p>
          </div>
          <textarea></textarea>
        </Write>
        <PostButton>Post your question</PostButton>
      </Div>
    </Background>
  );
};

export default WriteLayout;