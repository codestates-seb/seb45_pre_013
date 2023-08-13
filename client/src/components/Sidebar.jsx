import { SidebarDiv } from "@/styles/SidebarStyle";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <SidebarDiv>
      <div className="SidebarContent">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/QuestionDetail"}>
            <li>Questions</li>
          </Link>
          <Link to={"/Users"}>
            <li>User</li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </SidebarDiv>
  );
};

export default Sidebar;
