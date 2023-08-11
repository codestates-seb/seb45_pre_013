import { Head } from "@/styles/HeaderStyle";
import { TopBtn, TopBtnDiv } from "@/styles/TopBtnStyle";
import SearchForm from "./SearchForm";
import BrandLogo from "./BrandLogo";
import MenuBtn from "./MenuBtn";
import MenuList from "./MenuList";
import TopUserinfo from "./TopUserinfo";
import { useState } from "react";

const Header = () => {
  const [inOutWhether, setInOutWhether] = useState(false);

  const changeInOutWhether = () => {
    setInOutWhether(true);
  };

  return (
    <>
      <Head>
        <MenuBtn />
        <BrandLogo />
        <MenuList />
        <SearchForm />
        <TopBtnDiv>
          {inOutWhether ? (
            <TopUserinfo setInOutWhether={setInOutWhether} />
          ) : (
            <>
              <TopBtn
                onClick={changeInOutWhether}
                color="--powder-700"
                bgColor="--powder-100"
                hover="--powder-400"
              >
                Log in
              </TopBtn>
              <TopBtn color="--white" bgColor="--blue-500" hover="--blue-700">
                Sign up
              </TopBtn>
            </>
          )}
        </TopBtnDiv>
      </Head>
    </>
  );
};

export default Header;
