import { styled } from "styled-components";
import GlobalStyle from "@/styles/global";
import {
  MyPageContentContainer,
  PageContentContainerRight,
  PageContentContainerleft,
  PageContentGrid,
  PostsBlock,
  BadgeBlock,
  HeadlineTxt,
  AboutMeBlock,
  StatContent,
} from "../../styles/MyPage/MyPageContent";

const MyPageContent = () => {
  return (
    <>
      <GlobalStyle />
      <MyPageContentContainer>
        <PageContentContainerleft>
          <StatContent>
            <HeadlineTxt>Stat</HeadlineTxt>
          </StatContent>
        </PageContentContainerleft>
        <PageContentContainerRight>
          <PageContentGrid>
            <AboutMeBlock>
              <HeadlineTxt>About</HeadlineTxt>
            </AboutMeBlock>
            <BadgeBlock>
              <HeadlineTxt>SomeThing</HeadlineTxt>
            </BadgeBlock>
            <PostsBlock>
              <HeadlineTxt>SomeThing</HeadlineTxt>
            </PostsBlock>
          </PageContentGrid>
        </PageContentContainerRight>
      </MyPageContentContainer>
    </>
  );
};

export default MyPageContent;
