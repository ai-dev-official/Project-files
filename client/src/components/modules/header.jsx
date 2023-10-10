import React from 'react'
import { CiSearch } from "react-icons/ci";
import { AiFillControl } from "react-icons/ai"
import { FaAngleDown } from "react-icons/fa"


export const Header = () => {
  return (
    <div className="header__container">
        <div className="header">
        <div className="logo">
            <AiFillControl className="icon"/>
        </div>
        <div className="nav__container">
            <div className="nav">
                <div className="nav__links">Home</div>
                <div className="nav__links">Settings</div>
                <div className="nav__links">Help</div>
            </div>
            <div className="searchbar">
                <input type="search" name="search" id="search" 
                placeholder="Search Reports" className="search__input" />
                <div>
                    < CiSearch className="searchicon"/>
                </div>
            </div>
        </div>
        </div>
        <div className="dashboard__title">
            <h3 className="title">
                Main Dashboard
            </h3>
            <div className="title__right">
                <small className="light">Manage</small>
                <FaAngleDown className="angel__icon light"/>
            </div>
        </div>
        <div className="dashboard__menu">
            <div className="dashboard__links">
                Overview
            </div>
            <div className="dashboard__links">
                Accounts
            </div>
            <div className="dashboard__links">
                Services
            </div>
            <div className="dashboard__links">
                Payments
            </div>
            
        </div>
    </div>
  )
}
