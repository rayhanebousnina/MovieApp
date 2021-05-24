import React from 'react'
import { Link } from "react-router-dom";


const AdminNotification = (props) => {
  return(
    <div className="dark-edition">
              <div class="wrapper ">
        <div
          class="sidebar"
          data-color="purple"
          data-background-color="black"
          data-image="../assets/img/sidebar-2.jpg"
        >
        

          <div class="logo">
            <a
              href="http://www.creative-tim.com"
              class="simple-text logo-normal"
            >
              CinemaMates
            </a>
          </div>
          <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item ">
            <Link class="nav-link" to="/CinemaMates/dashboard">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link" to="/CinemaMates/profile">
              <i class="material-icons">person</i>
              <p>User Profile</p>
            </Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link" to="/CinemaMates/adminmovies">
              <i class="material-icons">content_paste</i>
              <p>Movies List</p>
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/CinemaMates/notifications">
              <i class="material-icons">notifications</i>
              <p>Notifications</p>
            </Link>
          </li>
        </ul>
      </div>
        </div>
        <div class="main-panel">
             {/* Navbar */}
        <nav
            class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "
            id="navigation-example"
          >
            <div class="container-fluid">
              <div class="navbar-wrapper">
                <Link class="navbar-brand" to="/CinemaMates/dashboard">
                  Dashboard
                </Link>
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-target="#navigation-example"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon icon-bar"></span>
                <span class="navbar-toggler-icon icon-bar"></span>
                <span class="navbar-toggler-icon icon-bar"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end">
                <form class="navbar-form">
                  <div class="input-group no-border">
                    <input
                      type="text"
                      value=""
                      class="form-control"
                      placeholder="Search..."
                    />
                    <button
                      type="submit"
                      class="btn btn-default btn-round btn-just-icon"
                    >
                      <i class="material-icons">search</i>
                      <div class="ripple-container"></div>
                    </button>
                  </div>
                </form>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to="/CinemaMates/dashboard">
                      <i class="material-icons">dashboard</i>
                      <p class="d-lg-none d-md-block">Stats</p>
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link"
                      to="/CinemaMates/notifications"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="material-icons">notifications</i>
                      <span class="notification">5</span>
                      <p class="d-lg-none d-md-block">Some Actions</p>
                    </Link>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a class="dropdown-item" href="javascript:void(0)">
                        Mike John responded to your email
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        You have 5 new tasks
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        You're now friend with Andrew
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        Another Notification
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        Another One
                      </a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/CinemaMates/profile">
                      <i class="material-icons">person</i>
                      <p class="d-lg-none d-md-block">Account</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
          <div class="content">
        <div class="container-fluid">
          <div class="card">
            <div class="card-header card-header-primary">
              <h4 class="card-title">Notifications</h4>
              <p class="card-category">Handcrafted by our friend
                <a target="_blank" href="https://github.com/mouse0270">Robert McIntosh</a>. Please checkout the
                <a href="http://bootstrap-notify.remabledesigns.com/" target="_blank">full documentation.</a>
              </p>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <h4 class="card-title">Notifications Style</h4>
                  <div class="alert alert-info">
                    <span>This is a plain notification</span>
                  </div>
                  <div class="alert alert-info">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="material-icons">close</i>
                    </button>
                    <span>This is a notification with close button.</span>
                  </div>
                  <div class="alert alert-info alert-with-icon" data-notify="container">
                    <i class="material-icons" data-notify="icon">add_alert</i>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="material-icons">close</i>
                    </button>
                    <span data-notify="message">This is a notification with close button and icon.</span>
                  </div>
                  <div class="alert alert-info alert-with-icon" data-notify="container">
                    <i class="material-icons" data-notify="icon">add_alert</i>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="material-icons">close</i>
                    </button>
                    <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <h4 class="card-title">Notification states</h4>
                  <div class="alert alert-info">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="material-icons">close</i>
                    </button>
                    <span>
                      <b> Info - </b> This is a regular notification made with ".alert-info"</span>
                  </div>
                  <div class="alert alert-success">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="material-icons">close</i>
                    </button>
                    <span>
                      <b> Success - </b> This is a regular notification made with ".alert-success"</span>
                  </div>
                  <div class="alert alert-warning">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="material-icons">close</i>
                    </button>
                    <span>
                      <b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
                  </div>
                  <div class="alert alert-danger">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="material-icons">close</i>
                    </button>
                    <span>
                      <b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
                  </div>
                  <div class="alert alert-primary">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="material-icons">close</i>
                    </button>
                    <span>
                      <b> Primary - </b> This is a regular notification made with ".alert-primary"</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="places-buttons">
                <div class="row">
                  <div class="col-md-6 ml-auto mr-auto text-center">
                    <h4 class="card-title">
                      Notifications Places
                      <p class="category">Click to view notifications</p>
                    </h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8 col-md-10 ml-auto mr-auto">
                    <div class="row">
                      <div class="col-md-4">
                        <button class="btn btn-primary btn-block" onclick="md.showNotification('top','left')">Top Left</button>
                      </div>
                      <div class="col-md-4">
                        <button class="btn btn-primary btn-block" onclick="md.showNotification('top','center')">Top Center</button>
                      </div>
                      <div class="col-md-4">
                        <button class="btn btn-primary btn-block" onclick="md.showNotification('top','right')">Top Right</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8 col-md-10 ml-auto mr-auto">
                    <div class="row">
                      <div class="col-md-4">
                        <button class="btn btn-primary btn-block" onclick="md.showNotification('bottom','left')">Bottom Left</button>
                      </div>
                      <div class="col-md-4">
                        <button class="btn btn-primary btn-block" onclick="md.showNotification('bottom','center')">Bottom Center</button>
                      </div>
                      <div class="col-md-4">
                        <button class="btn btn-primary btn-block" onclick="md.showNotification('bottom','right')">Bottom Right</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      <div class="fixed-plugin">
        <div class="dropdown show-dropdown">
          <a href="#" data-toggle="dropdown">
            <i class="fa fa-cog fa-2x"> </i>
          </a>
          <ul class="dropdown-menu">
            <li class="header-title"> Sidebar Filters</li>
            <li class="adjustments-line">
              <a href="javascript:void(0)" class="switch-trigger active-color">
                <div class="badge-colors ml-auto mr-auto">
                  <span
                    class="badge filter badge-purple active"
                    data-color="purple"
                  ></span>
                  <span
                    class="badge filter badge-azure"
                    data-color="azure"
                  ></span>
                  <span
                    class="badge filter badge-green"
                    data-color="green"
                  ></span>
                  <span
                    class="badge filter badge-warning"
                    data-color="orange"
                  ></span>
                  <span
                    class="badge filter badge-danger"
                    data-color="danger"
                  ></span>
                </div>
                <div class="clearfix"></div>
              </a>
            </li>
            <li class="header-title">Images</li>
            <li>
              <a class="img-holder switch-trigger" href="javascript:void(0)">
                <img src="../assets/img/sidebar-1.jpg" alt="" />
              </a>
            </li>
            <li class="active">
              <a class="img-holder switch-trigger" href="javascript:void(0)">
                <img src="../assets/img/sidebar-2.jpg" alt="" />
              </a>
            </li>
            <li>
              <a class="img-holder switch-trigger" href="javascript:void(0)">
                <img src="../assets/img/sidebar-3.jpg" alt="" />
              </a>
            </li>
            <li>
              <a class="img-holder switch-trigger" href="javascript:void(0)">
                <img src="../assets/img/sidebar-4.jpg" alt="" />
              </a>
            </li>
            <li class="button-container">
              <a
                href="https://www.creative-tim.com/product/material-dashboard-dark"
                target="_blank"
                class="btn btn-primary btn-block"
              >
                Free Download
              </a>
            </li>
            <li class="button-container">
              <a
                href="https://demos.creative-tim.com/material-dashboard-dark/docs/2.0/getting-started/introduction.html"
                target="_blank"
                class="btn btn-default btn-block"
              >
                View Documentation
              </a>
            </li>
            <li class="button-container github-star">
              <a
                class="github-button"
                href="https://github.com/creativetimofficial/material-dashboard/tree/dark-edition"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star ntkme/github-buttons on GitHub"
              >
                Star
              </a>
            </li>
            <li class="header-title">Thank you for 95 shares!</li>
            <li class="button-container text-center">
              <button id="twitter" class="btn btn-round btn-twitter">
                <i class="fa fa-twitter"></i> &middot; 45
              </button>
              <button id="facebook" class="btn btn-round btn-facebook">
                <i class="fa fa-facebook-f"></i> &middot; 50
              </button>
              <br />
              <br />
            </li>
          </ul>
        </div>
      </div>
    </div>
   )

 }

export default AdminNotification