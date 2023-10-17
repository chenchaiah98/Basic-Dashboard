import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaHandsClapping } from "react-icons/fa6";
import "./index.css";

const userName = "person Name";

const Header = () => (
  <nav className="man-nav-header">
    <p className="nav-username">
      {`Hello ${userName}`} <FaHandsClapping />,
    </p>
    <div className="hidden">
      <HiMiniMagnifyingGlass className="search-input-icon" />
      <input type="search" placeholder="search" className="search-input" />
    </div>
  </nav>
);

export default Header;
