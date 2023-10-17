import { Link } from "react-router-dom";
import { PiCircleDashedFill, PiCurrencyInrDuotone } from "react-icons/pi";
import { FaKey } from "react-icons/fa";
import {
  AiFillCodeSandboxSquare,
  AiOutlineRight,
  AiOutlineDown,
} from "react-icons/ai";
import { LuContact2 } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineLiveHelp } from "react-icons/md";

import ProfileImage from "../../images/profile-image.png";
import "./index.css";

const SideBar = () => (
  <div className="sidebar-container">
    <div className="mobile-main-icon-container">
      <div className="logo-icon-container">
        <div className="logo-icon">
          <PiCircleDashedFill className="logo" />
        </div>
        <div className="logo-text">
          <h2>Dashboard</h2>
        </div>
      </div>
      <div className="icon-container active">
        <div className="menu-icon">
          <FaKey />
        </div>
        <div className="menu-text ">
          <p>Dashboard</p>
        </div>
      </div>
      <div className="icon-container">
        <div className="menu-icon">
          <AiFillCodeSandboxSquare />
        </div>
        <div className="menu-text">
          <p>Product</p>
        </div>
        <div className="right-arrow">
          <AiOutlineRight />
        </div>
      </div>
      <div className="icon-container ">
        <div className="menu-icon">
          <LuContact2 />
        </div>
        <div className="menu-text">
          <p>Customer</p>
        </div>
        <div className="right-arrow">
          <AiOutlineRight />
        </div>
      </div>
      <div className="icon-container">
        <div className="menu-icon">
          <PiCurrencyInrDuotone />
        </div>
        <div className="menu-text">
          <p>Income</p>
        </div>
        <div className="right-arrow">
          <AiOutlineRight />
        </div>
      </div>
      <div className="icon-container ">
        <div className="menu-icon">
          <CiDiscount1 />
        </div>
        <div className="menu-text">
          <p>Promote</p>
        </div>
        <div className="right-arrow">
          <AiOutlineRight />
        </div>
      </div>
      <div className="icon-container">
        <div className="menu-icon">
          <MdOutlineLiveHelp />
        </div>
        <div className="menu-text">
          <p>Help</p>
        </div>
        <div className="right-arrow">
          <AiOutlineRight />
        </div>
      </div>
    </div>

    <div className="main-icon-container">
      <div className="logo-icon-container">
        <div className="logo-icon">
          <PiCircleDashedFill className="logo" />
        </div>
        <div className="logo-text">
          <h2>Dashboard</h2>
        </div>
      </div>
      <div className="icon-container active">
        <div className="menu-icon">
          <FaKey />
        </div>
        <div className="menu-text ">
          <p>Dashboard</p>
        </div>
      </div>
      <div className="icon-container">
        <div className="menu-icon">
          <AiFillCodeSandboxSquare />
        </div>
        <div className="menu-text">
          <Link to="/product">Product</Link>
        </div>
        <div className="right-arrow">
          <AiOutlineRight />
        </div>
      </div>
      <div className="icon-container ">
        <div className="menu-icon">
          <LuContact2 />
        </div>
        <div className="menu-text">
          <Link to="customer">Customer</Link>
        </div>
        <div className="right-arrow">
          <AiOutlineRight />
        </div>
      </div>
      <div className="icon-container">
        <div className="menu-icon">
          <PiCurrencyInrDuotone />
        </div>
        <div className="menu-text">
          <Link to="income">Income</Link>
        </div>
        <div className="right-arrow">
          <AiOutlineRight />
        </div>
      </div>
      <div className="icon-container ">
        <div className="menu-icon">
          <CiDiscount1 />
        </div>
        <div className="menu-text">
          <p>Promote</p>
        </div>
        <div className="right-arrow">
          <AiOutlineRight />
        </div>
      </div>
      <div className="icon-container">
        <div className="menu-icon">
          <MdOutlineLiveHelp />
        </div>
        <div className="menu-text">
          <Link to="help">Help</Link>
        </div>
        <div className="right-arrow">
          <AiOutlineRight />
        </div>
      </div>
    </div>
    <div className="user-profile-container">
      <div className="user-profile ">
        <div className="profile-image-container">
          <img
            src={ProfileImage}
            alt="profileImage"
            className="profile-image"
          />
        </div>
        <div className="menu-text">
          <h4 className="user-name">Person Name</h4>
          <p className="user-desgination">user designation </p>
        </div>
        <div className="right-arrow">
          <AiOutlineDown />
        </div>
      </div>
    </div>
  </div>
);

export default SideBar;
