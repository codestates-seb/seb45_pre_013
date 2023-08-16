import { SidebarDiv } from "@/styles/SidebarStyle";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selectedPage, setSelectedPage] = useState("Home");

  const selectPage = (e) => {
    const currentPage = e.target.innerHTML;
    setSelectedPage(currentPage);
  };

  return (
    <SidebarDiv>
      <div className="SidebarContent">
        <ul>
          <Link to={"/"}>
            <li
              className={selectedPage === "Home" ? "selectedPage" : ""}
              onClick={(e) => selectPage(e)}
            >
              Home
            </li>
          </Link>
          <Link to={"/Questions/List"}>
            <li
              className={selectedPage === "Questions" ? "selectedPage" : ""}
              onClick={(e) => selectPage(e)}
            >
              Questions
            </li>
          </Link>
          <Link to={"/User"}>
            <li
              className={selectedPage === "User" ? "selectedPage" : ""}
              onClick={(e) => selectPage(e)}
            >
              User
            </li>
          </Link>
        </ul>
      </div>
    </SidebarDiv>
  );
};

export default Sidebar;
