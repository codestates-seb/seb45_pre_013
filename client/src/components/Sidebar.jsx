import { SidebarDiv } from "@/styles/SidebarStyle";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation().pathname;
  const [selectedPage, setSelectedPage] = useState(location);

  useEffect(() => {
    switch (selectedPage) {
      case "/Login":
        setSelectedPage("/User");
        break;
      case "/Signup":
        setSelectedPage("/User");
        break;
      default:
        setSelectedPage(location);
    }
  }, [location]);

  return (
    <SidebarDiv>
      <div className="SidebarContent">
        <ul>
          <Link to={"/"}>
            <li className={selectedPage === "/" ? "selectedPage" : ""}>Home</li>
          </Link>
          <Link to={"/Questions/List"}>
            <li
              className={
                selectedPage === "/Questions/List" ? "selectedPage" : ""
              }
            >
              Questions
            </li>
          </Link>
          <Link to={"/MyPage"}>
            <li className={selectedPage === "/User" ? "selectedPage" : ""}>
              User
            </li>
          </Link>
        </ul>
      </div>
    </SidebarDiv>
  );
};

export default Sidebar;
