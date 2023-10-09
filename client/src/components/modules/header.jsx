import React from 'react'
import { CiSearch } from "react-icons/ci";
import { AiFillControl } from "react-icons/ai"

export const Header = () => {
  return (
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
  )
}
