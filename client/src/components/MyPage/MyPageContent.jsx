import { styled } from "styled-components";
import GlobalStyle from "@/styles/global";

const MyPageContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1075px;
  height: 813px;
  /* border: 1px solid blue; */
`;

const PageContentContainerleft = styled.div`
  width: 245px;
  height: 791px;
  /* border: 2px solid crimson; */
`;

const PageContentContainerRight = styled.div`
  display: block;
  width: 783px;
  height: 791px;
  /* border: 2px solid mediumseagreen; */
`;

const PageContentGrid = styled.div`
  display: grid;
  width: 783px;
  height: 791px;
  /* border: 2px solid crimson; */
`;

const StatContent = styled.div`
  width: 245px;
  height: 165px;
  /* border: 2px solid goldenrod; */
`;

const AboutMeBlock = styled.div`
  display: block;
  width: 783px;
  height: 87px;
  /* border: 2px solid crimson; */
`;

const HeadlineTxt = styled.div`
  color: var(--black);
  font-size: var(--fs-headline);
`;

const BadgeBlock = styled.div`
  width: 783px;
  height: 223px;
  /* border: 2px solid blue; */
`;

const PostsBlock = styled.div`
  width: 783px;
  height: 434px;
  /* border: 2px solid orange; */
`;

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
