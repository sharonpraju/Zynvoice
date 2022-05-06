import React from 'react'
import SideBar from '../Navigation/SideBar'
import TopBar from '../Navigation/TopBar'
import Footer from '../Navigation/Footer'

function SettingsSecurity() {
  return (
    <div id="app">
    <div className="main-wrapper">
      <div className="navbar-bg"></div>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <div className="main-content">
        <section className="section">
        <div className="section-header">
            <div className="section-header-back">
              <a href="settings.php" className="btn btn-icon"><i className="fas fa-arrow-left"></i></a>
            </div>
            <h1>Security Settings</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
              <div className="breadcrumb-item active"><a href="#">Settings</a></div>
              <div className="breadcrumb-item">Security Settings</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">All About Security Settings</h2>
            <p className="section-lead">
              You can adjust all Security Settings here
            </p>

            <div id="output-status"></div>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Jump To</h4>
                  </div>
                  <div className="card-body">
                    <ul className="nav nav-pills flex-column">
                      <li className="nav-item"><a href="settings-general.php" className="nav-link">General</a></li>
                      <li className="nav-item"><a href="settings-user-management.php" className="nav-link">User Management</a></li>
                      <li className="nav-item"><a href="settings-backup-restore.php" className="nav-link">Backup & Restore</a></li>
                      <li className="nav-item"><a href="#" className="nav-link active">Security</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <form id="form-update-store">
                  <div className="card" id="settings-card">
                    <div className="card-header">
                      <h4>Change Password</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group row align-items-center">
                        <label for="current_password" className="form-control-label col-sm-3 text-md-right">Current Password</label>
                        <div className="col-sm-6 col-md-9">
                          <input type="password" name="current_password" className="form-control" id="current_password" placeholder="Enter Current Password" required />
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label for="new_password" className="form-control-label col-sm-3 text-md-right">New Password</label>
                        <div className="col-sm-6 col-md-9">
                          <input type="password" className="form-control" name="new_password" id="new_password" placeholder="Enter New Password" required />
                        </div>
                      </div>
                      <input type="text" name="process" className="form-control" value="change_password" required hidden readonly />
                    </div>
                    <div className="card-footer text-md-right">
                      <button className="btn btn-warning" id="save-btn">Save Changes</button>
                    </div>
                  </div>
                </form>
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

export default SettingsSecurity