import { Contents } from "@/styles/Home/HomeStyle";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
