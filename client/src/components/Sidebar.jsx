import { SidebarDiv } from "@/styles/SidebarStyle";

const Sidebar = () => {
  return (
    <SidebarDiv>
      <div className="SidebarContent">
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Users</li>
        </ul>
      </div>
    </SidebarDiv>
  );
};

export default Sidebar;
