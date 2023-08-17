import { SidebarDiv } from "@/styles/SidebarStyle";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ smallSidebar }) => {
  const location = useLocation().pathname;
  const [selectedPage, setSelectedPage] = useState(location);

  useEffect(() => {
    switch (selectedPage.slice(0, 10)) {
      case "/Login":
        setSelectedPage("/User");
        break;
      case "/Signup":
        setSelectedPage("/User");
        break;
      case "/Questions":
        setSelectedPage("/Questions");
        break;
      default:
        setSelectedPage(location);
    }
  }, [location]);

  return (
    <SidebarDiv $small={smallSidebar}>
      <div className="SidebarContent">
        <ul>
          <Link to={"/"}>
            <li className={selectedPage === "/" ? "selectedPage" : ""}>Home</li>
          </Link>
          <Link to={"/Questions/List"}>
            <li className={selectedPage === "/Questions" ? "selectedPage" : ""}>
              Questions
            </li>
          </Link>
          <Link to={"/MyPage"}>
            <li
              className={
                selectedPage.slice(0, 7) === "/MyPage" ? "selectedPage" : ""
              }
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
