import {
  Head,
  MenuLine,
  Logo,
  MenuUl,
  SearchDiv,
  TopBtn,
  TopBtnDiv,
  UserImg,
  IconDiv,
} from "@/styles/HeaderStyle";
import {
  SearchIcon,
  HiInboxIcon,
  QuestionIcon,
  FcBiohazardOIcon,
  MdSourceIcon,
} from "@/styles/IconStyle";
import { BRANDLOGOIMG, USERPROFILEIMG } from "@/config/config";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [logInOutWhether, setLogInOutWhether] = useState(false);
  const [ageVal, setAgeVal] = useState(0);

  const change = () => {
    !ageVal ? setAgeVal(45) : setAgeVal(0);
  };
  const changeInOutWhether = () => {
    setLogInOutWhether(!logInOutWhether);
  };

  return (
    <>
      <Head>
        <div className="Menubtn" onClick={change}>
          <MenuLine age={-ageVal} y={ageVal} />
          <MenuLine dp={ageVal && "none"} />
          <MenuLine age={ageVal} y={-ageVal} />
        </div>

        <Link to={"/"}>
          <Logo>
            <img src={BRANDLOGOIMG} />
          </Logo>
        </Link>

        <MenuUl>
          <li>About</li>
          <li>Products</li>
          <li>For Teams</li>
        </MenuUl>

        <SearchDiv>
          <SearchIcon />
          <input
            type="text"
            role="combobox"
            placeholder="Search..."
            maxLength={240}
          />
        </SearchDiv>

        <TopBtnDiv>
          {logInOutWhether ? (
            <>
              <IconDiv>
                <UserImg src={USERPROFILEIMG} />
              </IconDiv>
              <IconDiv>
                <HiInboxIcon />
              </IconDiv>
              <IconDiv>
                <FcBiohazardOIcon />
              </IconDiv>
              <IconDiv>
                <QuestionIcon />
              </IconDiv>
              <IconDiv>
                <MdSourceIcon onClick={changeInOutWhether} />
              </IconDiv>
            </>
          ) : (
            <>
              <Link to={"/Login"}>
                <TopBtn
                  onClick={changeInOutWhether}
                  color="--powder-700"
                  bgColor="--powder-100"
                  hover="--powder-400"
                >
                  Log in
                </TopBtn>
              </Link>
              <Link to={"/Signup"}>
                <TopBtn color="--white" bgColor="--blue-500" hover="--blue-700">
                  Sign up
                </TopBtn>
              </Link>
            </>
          )}
        </TopBtnDiv>
      </Head>
      <Outlet />
    </>
  );
};

export default Header;
