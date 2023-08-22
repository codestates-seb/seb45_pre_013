import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import MyPageTap from "@/components/MyPage/MyPageTap";
import MyPageContent from "@/components/MyPage/MyPageContent";
import MyPagePreview from "@/components/MyPage/MyPagePreview";
import { API_URL } from "@/config/config";
const MyPagePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 40px);
  max-width: 1051px;
  height: 982px;
  /* border: 2px solid red; */
`;

const MyPage = () => {
  const navigate = useNavigate();
  const Authorization = localStorage.getItem("Authorization");
  const [user, setUser] = useState();

  useEffect(() => {
    if (!Authorization) {
      navigate("/Login/");
    } else {
      fetch(`${API_URL}/members`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUser(data);
        });
    }
  }, [Authorization]);

  const onClickUserLeaveHnadler = () => {
    fetch(`${API_URL}/members`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: Authorization,
      },
    })
      .then((response) => {
        if (response.ok) {
          localStorage.setItem("Authorization", "null");
          navigate("/");
        }
      })
      .catch();
  };

  return user ? (
    <>
      <MyPagePageContainer>
        <MyPagePreview nickname={user.nickname} title={user.title} />
        <MyPageTap />
        <MyPageContent intro={user.intro}></MyPageContent>
        <p onClick={onClickUserLeaveHnadler}>leave</p>
      </MyPagePageContainer>
    </>
  ) : null;
};

export default MyPage;
