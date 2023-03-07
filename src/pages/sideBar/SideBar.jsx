import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FaStoreAlt } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { ImStatsBars } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { HiOutlineLanguage } from "react-icons/hi2";
import {
  MdHelpCenter,
  MdHomeRepairService,
  MdLanguage,
  MdDarkMode,
} from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { BiMessageAltDetail } from "react-icons/bi";
import { AiOutlineFullscreen, AiFillSetting } from "react-icons/ai";
import "./sidebar.scss";

const SideBar = () => {
  return (
    <section className="container">
      <div className="sidebar">
        <div className="titlebox">
          <p className="siderbar-title">Dashboard</p>
        </div>
        <hr />
        <div className="listContainer">
          <ul>
            <p className="listheader">Main</p>
            <li>
              <MdSpaceDashboard className="icon" />
              <span className="listName">Dashboard</span>
            </li>
            <p className="listheader">Lists</p>
            <li>
              <AiOutlineUser className="icon" />
              <span className="listName">User</span>
            </li>
            <li>
              <FaStoreAlt className="icon" />
              <span className="listName">Product</span>
            </li>
            <li>
              <BsCardList className="icon" />
              <span className="listName">Orders</span>
            </li>
            <li>
              <TbTruckDelivery className="icon" />
              <span className="listName">Delivery</span>
            </li>
            <p className="listheader">Useful</p>
            <li>
              <ImStatsBars className="icon" />
              <span className="listName">Dashboard</span>
            </li>
            <li>
              <IoMdNotifications className="icon" />
              <span className="listName">Notifications</span>
            </li>
            <p className="listheader">Services</p>
            <li>
              <MdHomeRepairService className="icon" />
              <span className="listName">General</span>
            </li>
            <li>
              <HiOutlineLanguage className="icon" />
              <span className="listName">Language</span>
            </li>
            <li>
              <MdHelpCenter className="icon" />
              <span className="listName">Help</span>
            </li>
            <p className="listheader">User</p>
            <li>
              <CgProfile className="icon" />
              <span className="listName">Profile</span>
            </li>
            <li>
              <RiLogoutBoxRFill className="icon" />
              <span className="listName">Log Out</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="header">
        <div className="inputBox">
          <form className="inputForm">
            <input className="inputTag" type="text" placeholder="Search..." />
            <GoSearch className="inputicon" />
          </form>
        </div>
        <div className="menuBar">
          <MdLanguage className="icon" />
          <span className="language">English</span>
          <MdDarkMode className="icon" />
          <AiOutlineFullscreen className="icon" />
          <div className="iconBox">
            <IoMdNotifications className="icon" />
            <div className="noti">
              <span>1</span>
            </div>
          </div>
          <div className="iconBox">
            <BiMessageAltDetail className="icon" />
            <div className="noti">
              <span>1</span>
            </div>
          </div>
          <div className="profile">
            <img
              className="profile-image"
              src="https://domf5oio6qrcr.cloudfront.net/medialibrary/8370/Angelina-Jolie.jpg"
              alt="angli"
            />
          </div>
          <AiFillSetting className="icon" />
        </div>
      </div>
      <hr />
    </section>
  );
};

export default SideBar;
