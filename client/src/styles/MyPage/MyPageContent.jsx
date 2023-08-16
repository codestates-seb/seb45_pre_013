import { styled } from "styled-components";

export const MyPageContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1075px;
  height: 813px;
  /* border: 1px solid blue; */
`;

export const PageContentContainerleft = styled.div`
  width: 245px;
  height: 791px;
  /* border: 2px solid crimson; */
`;

export const PageContentContainerRight = styled.div`
  display: block;
  width: calc(100% - 245px);
  height: 791px;
  /* border: 2px solid mediumseagreen; */
`;

export const PageContentGrid = styled.div`
  display: grid;
  width: calc(100% - 245px);
  height: 791px;
  /* border: 2px solid crimson; */
`;

export const StatContent = styled.div`
  width: 245px;
  height: 165px;
  /* border: 2px solid goldenrod; */
`;

export const AboutMeBlock = styled.div`
  display: block;
  width: calc(100% - 245px);
  height: 87px;
  /* border: 2px solid crimson; */
`;

export const HeadlineTxt = styled.div`
  color: var(--black);
  font-size: var(--fs-headline);
`;

export const BadgeBlock = styled.div`
  width: calc(100% - 245px);
  height: 223px;
  /* border: 2px solid blue; */
`;

export const PostsBlock = styled.div`
  width: calc(100% - 245px);
  height: 434px;
  /* border: 2px solid orange; */
`;
