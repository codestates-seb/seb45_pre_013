import { styled } from "styled-components";

const Sidebar = styled.div`
  width: 300px;
  height: 500px;
  margin-left: 24px;
  margin-bottom: 15px;
  background-color: var(--yellow);
  border-radius: 4px;
  border: 1px solid var(--orange-200);
`;

const RightSidebar = () => {
  return <Sidebar>RightSidebar</Sidebar>;
};

export default RightSidebar;
