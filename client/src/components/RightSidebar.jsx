import { RightSidebarDiv } from "@/styles/SidebarStyle";
import { HiPencil } from "react-icons/hi2";
import { BiMessage } from "react-icons/bi";
import { DiStackoverflow } from "react-icons/di";

const RightSidebar = () => {
  return (
    <RightSidebarDiv>
      <h5>The Overflow Blog</h5>
      <ul>
        <li>
          <HiPencil size="18" />
          Want better answers from your data? Ask better questions
        </li>
        <li>
          <HiPencil size="18" />
          <p>
            Making event-driven development predictable with Discover <br />
            <span className="italic">sponsored post</span>
          </p>
        </li>
      </ul>
      <h5>Featured on Meta</h5>
      <ul>
        <li>
          <BiMessage size="18" color="var(--blue-400)" />
          <p>Moderation strike: Results of negotiations</p>
        </li>
        <li>
          <BiMessage size="18" color="var(--blue-400)" />
          <p>
            Our Design Vision for Stack Overflow and the Stack Exchange network
          </p>
        </li>
        <li>
          <DiStackoverflow size="18" />
          <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
        </li>
        <li>
          <DiStackoverflow size="18" />
          <p>Collections: A New Feature for Collectives on Stack Overflow</p>
        </li>
        <li>
          <DiStackoverflow size="18" />
          <p>Preview of Search and Question-Asking Powered by GenAI</p>
        </li>
        <li>
          <DiStackoverflow size="18" />
          <p>
            Call for volunteer reviewers for an updated search experience:
            OverflowAI Search
          </p>
        </li>
      </ul>
    </RightSidebarDiv>
  );
};

export default RightSidebar;
