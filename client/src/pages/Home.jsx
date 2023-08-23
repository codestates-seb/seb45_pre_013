import { Link } from "react-router-dom";
import { AiOutlineLock } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { Contents } from "@/styles/Home/HomeStyle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Background } from "@/styles/RootStyle";

const Home = () => {
  return (
    <>
      <Header smallSidebar="small" />
      <Background>
        <div>
          <div>
            <Contents>
              <div>
                <article>
                  <div className="frontEnd">
                    <BiSearchAlt size="62" color="#f2740d" />
                    <h1>
                      Find the best answer to your technical question, help
                      others answer theirs
                    </h1>
                    <Link to="/Signup">
                      <button>Join the community</button>
                    </Link>
                  </div>
                </article>
                <article>
                  <div className="backEnd">
                    <AiOutlineLock size="62" color="#0a95ff" />
                    <h1>Team 502</h1>
                    <button>Our Team</button>
                  </div>
                </article>
              </div>
              <h1>
                Every <span className="highlight">developer</span> has atab open
                to Stack Overflow
              </h1>
            </Contents>
          </div>
          <Footer />
        </div>
      </Background>
    </>
  );
};

export default Home;
