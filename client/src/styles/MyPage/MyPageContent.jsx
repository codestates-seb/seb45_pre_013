import { styled } from "styled-components";

export const MyPageContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1075px;
  height: 813px;
`;

export const PageContentContainerleft = styled.div`
  width: 245px;
  height: 791px;
`;

export const PageContentContainerRight = styled.div`
  display: block;
  width: calc(100% - 245px);
  height: 791px;
`;

export const PageContentGrid = styled.div`
  display: grid;
  width: calc(100% - 245px);
  height: 791px;
`;

export const StatContent = styled.div`
  width: 245px;
  height: 165px;
`;

export const AboutMeBlock = styled.div`
  display: block;
  width: calc(100% - 245px);
  height: 87px;
`;

export const HeadlineTxt = styled.div`
  color: var(--black);
  font-size: var(--fs-headline);
`;

export const BadgeBlock = styled.div`
  width: calc(100% - 245px);
  height: 223px;
`;

export const PostsBlock = styled.div`
  width: calc(100% - 245px);
  height: 434px;
`;
