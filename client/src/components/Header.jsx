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
import { BrandLogoImg, userProfileImg } from "@/config/config";
import { useState } from "react";

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

        <Logo href="https://stackoverflow.com">
          <img src={BrandLogoImg} />
        </Logo>

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
                <UserImg src={userProfileImg} />
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
