import React from 'react'
import "./admindashboard.css"
import { Link } from "react-router-dom";



const SideBarComponent = (props) => {
  return(
    <div>

<div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item">
            <Link class="nav-link" to="/CinemaMates/dashboard">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link" to="/CinemaMates/dashboard/profile">
              <i class="material-icons">person</i>
              <p>User Profile</p>
            </Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link" to="/CinemaMates/dashboard/movies">
              <i class="material-icons">content_paste</i>
              <p>Movies List</p>
            </Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link" to="/CinemaMates/dashboard/notifications">
              <i class="material-icons">notifications</i>
              <p>Notifications</p>
            </Link>
          </li>
        </ul>
      </div>

    </div>
   )

 }

export default SideBarComponent