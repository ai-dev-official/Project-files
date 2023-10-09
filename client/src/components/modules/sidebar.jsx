import React from "react";
import { HiOutlineBellAlert } from "react-icons/hi2"

const SideBar = () => {
  return (
    <div className="sidebar__container">
      <div className="heading">
        <div className="notify__icon">
          < HiOutlineBellAlert className="notificon icon" 
          />
        </div>
        <div className="heading__right">
            <div className="name">
                <small className="fname">Clem Jessica</small>
                <small className="title">Admin Staff</small>
            </div>
            <div className="photo">
                <img src="../../assets/profile.jpg" alt="Profile Image" />
            </div>
        </div>
      </div>
      <hr className="hr__line"/>
    </div>
  );
};

export default SideBar;
