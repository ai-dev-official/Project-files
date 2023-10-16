import React, { Component, useState, useEffect }  from 'react'
import { Header } from '../modules/header'
import SideBar from '../modules/sidebar'
import Upper_row from '../modules/upper_row'
import Lower_row from '../modules/lower_row'
import axios from 'axios';

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className="main">
        <Header />
        <div className="dashboard__modules">
          <div className="upper__row">
            <Upper_row />
          </div>
        </div>
        </div>
        <div className="aside">
          <SideBar />
        </div>
    </div>
  )
}

export default Dashboard