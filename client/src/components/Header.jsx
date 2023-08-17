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
import { BRANDLOGOIMG, USERPROFILEIMG, LOGOIMG } from "@/config/config";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useRef } from "react";
import { useEffect } from "react";

const Header = () => {
  const [logInOutWhether, setLogInOutWhether] = useState(false);
  const [ageVal, setAgeVal] = useState(0);
  const [inputVisible, setInputVisible] = useState(false);
  const inputFocus = useRef();

  const changeInOutWhether = () => {
    setLogInOutWhether(!logInOutWhether);
  };
  const change = () => {
    !ageVal ? setAgeVal(45) : setAgeVal(0);
  };
  const toggleInput = () => {
    setInputVisible(!inputVisible);
  };

  useEffect(() => {
    inputVisible ? inputFocus.current.focus() : null;
  }, [inputVisible]);

  return (
    <>
      <Head>
        <div className="contents">
          <div className="Menubtn" onClick={change}>
            <MenuLine $age={-ageVal} $y={ageVal} />
            <MenuLine $dp={ageVal && "none"} />
            <MenuLine $age={ageVal} $y={-ageVal} />
            {ageVal ? <Sidebar /> : null}
          </div>

          <Link to={"/"}>
            <Logo>
              <img className="brand" src={BRANDLOGOIMG} />
              <img className="logo" src={LOGOIMG} />
            </Logo>
          </Link>

          <MenuUl>
            <li className="hidden-element">About</li>
            <li>Products</li>
            <li className="hidden-element">For Teams</li>
          </MenuUl>

          <SearchDiv>
            <SearchIcon className="searchIcon" onClick={toggleInput} />
            <input
              className={inputVisible ? "" : "visible"}
              type="text"
              role="combobox"
              placeholder="Search..."
              maxLength={240}
              ref={inputFocus}
            />
            {inputVisible && (
              <button className="searchBtnVisible">
                <SearchIcon />
              </button>
            )}
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
                    $color="--powder-700"
                    $bgColor="--powder-100"
                    $hover="--powder-400"
                  >
                    Log in
                  </TopBtn>
                </Link>
                <Link to={"/Signup"}>
                  <TopBtn
                    $color="--white"
                    $bgColor="--blue-500"
                    $hover="--blue-700"
                  >
                    Sign up
                  </TopBtn>
                </Link>
              </>
            )}
          </TopBtnDiv>
        </div>
      </Head>
    </>
  );
};

export default Header;
