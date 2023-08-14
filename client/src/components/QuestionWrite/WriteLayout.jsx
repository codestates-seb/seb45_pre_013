import background from "@/assets/image/backgroundQuestionWrite.svg";
import iconWrite from "@/assets/image/iconWrite.png";
import {
  Background,
  Div,
  HeadlineDiv,
  Notice,
  TitleWrite,
  WriteGuide,
} from "@/styles/QuestionWriteStyle";

const WriteLayout = () => {
  return (
    <Background>
      <Div>
        <HeadlineDiv>
          <h1>Ask a public question</h1>
          <img src={background} />
        </HeadlineDiv>
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
        <TitleWrite>
          <label>Tltle</label>
          <p>
            Be specific and imagine you’re asking a question to another person.
          </p>
          <input
            type="text"
            maxLength="300"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          />
        </TitleWrite>
        <WriteGuide>
          <div>Writing a good title</div>
          <div>
            <img src={iconWrite} />
            <div>
              <p>Your title should summarize the problem.</p>
              <p>
                You might find that you have a better
                <br /> idea of your title after writing out the rest <br />
                of the question.
              </p>
            </div>
          </div>
        </WriteGuide>
      </Div>
    </Background>
  );
};

export default WriteLayout;
