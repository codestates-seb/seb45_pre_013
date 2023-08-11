import { SidebarDiv, SidebarContent } from "@/styles/SidebarStyle";

const Sidebar = () => {
  return (
    <SidebarDiv>
      <SidebarContent>
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Users</li>
        </ul>
      </SidebarContent>
    </SidebarDiv>
  );
};

export default Sidebar;
