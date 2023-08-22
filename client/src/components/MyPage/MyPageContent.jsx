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
} from "@/styles/MyPage/MyPageContent";

const MyPageContent = ({ intro }) => {
  return (
    <>
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
              <p style={{ whiteSpace: "pre" }}>{intro}</p>
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
