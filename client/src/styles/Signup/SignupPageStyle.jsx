import { styled } from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--black-050);

  a {
    vertical-align: baseline;
    color: var(--blue);
    overflow: hidden;
    word-break: break-all;
    cursor: pointer;
  }

  p {
    margin: 2px;
    padding: 2px;
    color: var(--black);
    font-size: 12px;
  }

  .itemcontainer {
    display: flex;
    flex-direction: column;
    width: 421px;
    height: 327px;
    /* background-color: royalblue; */
    margin-right: 48px;
  }

  .headline {
    width: 421px;
    height: 54px;
    font-size: 27px;
    margin-bottom: 40px;
    font-weight: 400;
  }

  .item {
    width: 421px;
    height: 24px;
    margin-bottom: 35px;
    font-size: var(--fs-base);
  }

  .item2 {
    padding-top: 20px;
    width: 421px;
    height: 34px;
    font-size: 13px;
    color: var(--black-500);
  }

  .blockitem {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-bottom: 20px;
  }

  .blockitem img {
    width: 26px;
    height: 26px;
  }

  .item img {
    color: var(--blue-500) !important;
    margin-right: 5px;
  }
`;
