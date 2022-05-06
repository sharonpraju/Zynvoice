import React from 'react'
import SideBar from '../Navigation/SideBar'
import TopBar from '../Navigation/TopBar'
import Footer from '../Navigation/Footer'

function Settings() {
  return (
    <div id="app">
    <div className="main-wrapper">
      <div className="navbar-bg"></div>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Settings</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
              <div className="breadcrumb-item">Settings</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Overview</h2>
            <p className="section-lead">
              Organize and adjust all settings of Zynvoice.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <div className="card card-large-icons">
                  <div className="card-icon bg-primary text-white">
                    <i className="fas fa-cog"></i>
                  </div>
                  <div className="card-body">
                    <h4>General</h4>
                    <p>General settings such as, site title, site description, address and so on.</p>
                    <a href="settings-general.php" className="card-cta">Change Setting <i className="fas fa-chevron-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-large-icons">
                  <div className="card-icon bg-primary text-white">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="card-body">
                    <h4>User Management</h4>
                    <p>Add or Remove users and manage their activities.</p>
                    <a href="settings-user-management.php" className="card-cta">Change Setting <i className="fas fa-chevron-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-large-icons">
                  <div className="card-icon bg-primary text-white">
                    <i className="fas fa-hdd"></i>
                  </div>
                  <div className="card-body">
                    <h4>Backup and Restore</h4>
                    <p>Backup and restore your data and settings.</p>
                    <a href="settings-backup-restore.php" className="card-cta">Change Setting <i className="fas fa-chevron-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-large-icons">
                  <div className="card-icon bg-primary text-white">
                    <i className="fas fa-lock"></i>
                  </div>
                  <div className="card-body">
                    <h4>Security</h4>
                    <p>Security settings managing for your accounts.</p>
                    <a href="settings-security.php" className="card-cta">Change Setting <i className="fas fa-chevron-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  </div>

  )
}

export default Settings