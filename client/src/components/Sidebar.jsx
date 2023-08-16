import { SidebarDiv } from "@/styles/SidebarStyle";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation().pathname;
  const [selectedPage, setSelectedPage] = useState(location);

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
              className={selectedPage === "/" ? "selectedPage" : ""}
              onClick={selectPage}
            >
              Home
            </li>
          </Link>
          <Link to={"/QuestionListLayout"}>
            <li
              className={
                selectedPage === "/QuestionListLayout" ? "selectedPage" : ""
              }
              onClick={selectPage}
            >
              Questions
            </li>
          </Link>
          <Link to={"/User"}>
            <li
              className={selectedPage === "/User" ? "selectedPage" : ""}
              onClick={selectPage}
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
