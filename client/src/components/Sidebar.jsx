import {
  SidebarDiv,
  SidebarContent,
  SidebarUl,
  SidebarLi,
} from "@/styles/SidebarStyle";

const Sidebar = () => {
  return (
    <SidebarDiv>
      <SidebarContent>
        <SidebarUl>
          <SidebarLi>Home</SidebarLi>
          <SidebarLi>Questions</SidebarLi>
          <SidebarLi>Users</SidebarLi>
        </SidebarUl>
      </SidebarContent>
    </SidebarDiv>
  );
};

export default Sidebar;
