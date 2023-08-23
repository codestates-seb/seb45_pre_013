import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import { Div } from "@/styles/RootStyle";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Flex } from "@/styles/DivStyle";

const Root = () => {
  return (
    <>
      <Header />
      <Div>
        <div>
          <Flex>
            <Sidebar />
            <div>
              <Outlet />
            </div>
          </Flex>
          <Footer />
        </div>
      </Div>
    </>
  );
};

export default Root;
