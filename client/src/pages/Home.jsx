import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Contents } from "@/styles/Home/HomeStyle";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <Header />

      <Contents />
      <Footer />
    </>
  );
};

export default Home;
