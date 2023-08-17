import MyPageTap from "@/components/MyPage/MyPageTap";
import MyPageContent from "@/components/MyPage/MyPageContent";
import MyPagePreview from "@/components/MyPage/MyPagePreview";
import { styled } from "styled-components";
const MyPagePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 40px);
  max-width: 1051px;
  height: 982px;
  /* border: 2px solid red; */
`;

const MyPage = () => {
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
