import React from 'react'
import SideBar from '../Navigation/SideBar'
import TopBar from '../Navigation/TopBar'
import Footer from '../Navigation/Footer'

function SettingsRestore() {
  return (
    <div id="app">
    <div class="main-wrapper">
      <div class="navbar-bg"></div>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <div class="main-content">
        <section class="section">
        <div class="section-header">
            <div class="section-header-back">
              <a href="settings.php" class="btn btn-icon"><i class="fas fa-arrow-left"></i></a>
            </div>
            <h1>Backup & Restore</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
              <div class="breadcrumb-item active"><a href="#">Settings</a></div>
              <div class="breadcrumb-item">Backup & Restore</div>
            </div>
          </div>

          <div class="section-body">
            <h2 class="section-title">Manage Backup & Restore</h2>
            <p class="section-lead">
              You can manage all your data backup and restoring here
            </p>

            <div id="output-status"></div>
            <div class="row">
              <div class="col-md-4">
                <div class="card">
                  <div class="card-header">
                    <h4>Jump To</h4>
                  </div>
                  <div class="card-body">
                    <ul class="nav nav-pills flex-column">
                      <li class="nav-item"><a href="settings-general.php" class="nav-link">General</a></li>
                      <li class="nav-item"><a href="settings-user-management.php" class="nav-link">User Management</a></li>
                      <li class="nav-item"><a href="#" class="nav-link active">Backup & Restore</a></li>
                      <li class="nav-item"><a href="settings-security.php" class="nav-link">Security</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <form id="form-restore" enctype="multipart/form-data">
                    <div class="section-title">Restore your Data and Settings using the backup file.</div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <div class="custom-file">
                              <input type="file" class="custom-file-input" name="file" id="customFile" />
                              <label class="custom-file-label" for="customFile">Choose a backup file</label>
                              <input type="text" class="form-control" name="process" value="restore_data" hidden readonly />
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="submit" class="btn btn-warning btn-lg col-md-6" value="Upload" />
                        </div>
                    </div>
                </form>
                <div class="section-title">Backup your Data and Settings.</div>
                <a class="btn btn-success btn-lg" href="database/zynact-billing" download><i class="fas fa-download"></i> Generate Backup File</a>
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

export default SettingsRestore