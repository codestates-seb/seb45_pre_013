import styled from "styled-components";

export const Head = styled.header`
  z-index: 9999;
  display: flex;
  position: fixed;
  flex-wrap: wrap;
  align-items: center;
  background-color: var(--white);
  width: 100%;
  height: 56px;
  border-top: 3px solid var(--orange);
  border-bottom: 1px solid var(--black-200);
`;

export const Menubtn = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0.2;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5px;
  padding: 0 16px;
  width: 50px;
  height: 100%;
  &:hover {
    background-color: var(--black-100);
  }
`;

export const MenuLine = styled.div`
  display: ${(props) => props.dp};
  margin: 2px;
  width: 20px;
  height: 3px;
  background-color: var(--black-300);
  transform: rotate(${(props) => props.age}deg)
    translate(0, ${(props) => props.y / 10}px);
  transition: 0.1s;
`;

export const Logo = styled.a`
  display: flex;
  flex: 0.5;
  justify-content: center;
  margin-bottom: 5px;
  padding: 0 8px 5px 8px;
  height: 100%;
  &:hover {
    background-color: var(--black-100);
  }
`;

export const LogoImg = styled.img`
  width: 150px;
`;

export const MenuOl = styled.ul`
  display: flex;
  flex: 1;
  list-style: none;
  padding: 2px;
  min-width: 252px;
`;

export const MenuLi = styled.li`
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 20px;
  &:hover {
    background-color: var(--black-100);
  }
`;

export const Input = styled.input`
  padding: 7.8px 9.2px 7.8px 10px;
  font-size: 13px;
  width: 100%;
`;

export const SearchDiv = styled.div`
  display: flex;
  flex: 3;
  margin-right: 5px;
  align-items: center;
  border: 1px solid var(--black-200);
  border-radius: 5px;
  width: auto;
  height: 32.59px;
`;

export const TopBtn = styled.button`
  cursor: pointer;
  margin-left: 4px;
  padding: 8px 10.4px;
  border-radius: 5px;
  width: auto;
  min-width: 72px;
  height: 33px;
  color: ${(props) => `var(${props.color})` || "var(--black)"};
  background-color: ${(props) => `var(${props.bgColor})` || "var(--black)"};
  &:hover {
    background-color: ${(props) => `var(${props.hover})`};
  }
`;

export const TopBtnDiv = styled.div`
  min-width: 130px;
  display: flex;
  align-items: center;
  flex: 1;
  padding-right: 12px;
`;

export const UserImg = styled.img`
  cursor: pointer;
  width: 40px;
  &:hover {
    background-color: var(--black-100);
  }
`;

export const IconDiv = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px 5px 4px;
  width: 40px;
  height: 53px;
  &:hover {
    background-color: var(--black-100);
  }
`;
