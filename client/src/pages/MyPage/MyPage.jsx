import { styled } from "styled-components";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import MyPageTap from "@/components/MyPage/MyPageTap";
import MyPageContent from "@/components/MyPage/MyPageContent";
import MyPagePreview from "@/components/MyPage/MyPagePreview";
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
  const [cookies] = useCookies();
  if (!cookies.user) {
    navigate("/Login/");
  }

  return (
    <>
      <MyPagePageContainer>
        <MyPagePreview />
        <MyPageTap />
        <MyPageContent></MyPageContent>
      </MyPagePageContainer>
    </>
  );
};

export default MyPage;
