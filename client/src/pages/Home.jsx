import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Contents } from "@/styles/Home/HomeStyle";

const Home = () => {
  return (
    <>
      <Header />
      <Contents>
        <article>
          <h1>FRONTEND</h1>
          <div className="frontEnd"></div>
        </article>
        <article>
          <h1>BACKEND</h1>
          <div className="backEnd"></div>
        </article>
      </Contents>
      <Footer />
    </>
  );
};

export default Home;
