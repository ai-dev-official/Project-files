import React from "react";
import { HiOutlineBellAlert } from "react-icons/hi2"

const SideBar = () => {
  const imageUrl = 'https://ai-dev.vip/assets/img/about_ai-1.webp';

  return (
    <div className="sidebar__container">
      <div className="heading">
        <div className="notify__icon">
          < HiOutlineBellAlert className="notificon" 
          />
        </div>
        <div className="heading__right">
            <div className="name">
                <small className="fname">Azubuike Ibe</small>
                <small className="title">Admin Staff</small>
            </div>
            <div className="photo">
                 <img src={imageUrl} className="img" alt="Profile Image" />
            </div>
        </div>
      </div>
      <hr className="hr__line"/>
    </div>
  );
};

export default SideBar;
