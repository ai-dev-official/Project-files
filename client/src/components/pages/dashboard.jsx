import React from 'react'
import { Header } from '../modules/header'
import SideBar from '../modules/sidebar'

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className="main">
        <Header />
        </div>
        <div className="aside">
          <SideBar />
        </div>
    </div>
  )
}

export default Dashboard