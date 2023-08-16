import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import { Div } from "@/styles/RootStyle";
import Footer from "@/components/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Div>
        <div>
          <Outlet />
        </div>
        <Footer />
      </Div>
    </>
  );
};

export default Root;
