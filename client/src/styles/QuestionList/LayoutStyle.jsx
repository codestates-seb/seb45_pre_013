import { styled } from "styled-components";
import { Flex } from "@/styles/DivStyle";

export const ListDiv = styled(Flex)`
  width: 1051px;

  & > div:first-child {
    width: calc(100% - 324px);

    @media (max-width: 980px) {
      width: 100%;
    }
  }

  h2.more {
    font-size: var(--fs-headline2);
    margin-top: 15px;
    margin-bottom: 17px;
  }

  @media (max-width: 1265px) {
    width: calc(100vw - 214px);
  }

  @media (max-width: 980px) {
    width: calc(100vw);
    flex-direction: column;
  }
`;

export const ItemDiv = styled(Flex)`
  width: 100%;
  min-height: 106px;
  padding: 16px;
  border-top: 1px solid var(--black-100);

  &:nth-child(2) {
    margin-top: 27px;
  }

  & > div:first-child {
    width: 108px;
    height: 73px;
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    color: var(--black-500);
    font-size: var(--fs-normal);
    font-weight: 600;

    & > p:first-child {
      color: var(--black-900);
    }

    & > p {
      margin-right: 4px;
    }

    @media (max-width: 980px) {
      width: calc(100% - 16px);
      flex-direction: row;
      justify-content: left;
    }
  }

  & > div:nth-child(2) {
    width: calc(100% - 124px);
    display: flex;
    flex-direction: column;

    h3 {
      width: 100%;
      padding-right: 24px;
      margin-bottom: 5px;
      font-size: var(--fs-headline3);
      color: var(--blue-600);

      &:hover {
        color: var(--blue-500);
      }
    }

    & > div {
      display: flex;
      justify-content: right;
      align-items: center;
      margin-left: auto;
      font-size: var(--fs-small);

      img {
        width: 16px;
        height: 16px;
      }

      p:nth-child(2) {
        color: var(--blue-600);

        &:hover {
          color: var(--blue-500);
        }
      }

      p {
        margin-left: 4px;
        color: var(--black-500);
      }
    }
    @media (max-width: 980px) {
      width: 100%;
    }
  }

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
