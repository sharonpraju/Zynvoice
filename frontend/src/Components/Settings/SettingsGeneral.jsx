import React from 'react'
import SideBar from '../Navigation/SideBar'
import TopBar from '../Navigation/TopBar'
import Footer from '../Navigation/Footer'

function SettingsGeneral() {
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
            <h1>General Settings</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
              <div className="breadcrumb-item active"><a href="#">Settings</a></div>
              <div className="breadcrumb-item">General Settings</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">All About General Settings</h2>
            <p className="section-lead">
              You can adjust all general settings here
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
                      <li className="nav-item"><a href="#" className="nav-link active">General</a></li>
                      <li className="nav-item"><a href="settings-user-management.php" className="nav-link">User Management</a></li>
                      <li className="nav-item"><a href="settings-backup-restore.php" className="nav-link">Backup & Restore</a></li>
                      <li className="nav-item"><a href="settings-security.php" className="nav-link">Security</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <form id="form-update-store">
                  <div className="card" id="settings-card">
                    <div className="card-header">
                      <h4>General Settings</h4><span className="text-muted">Your store details can be changed below.</span>
                    </div>
                    <div className="card-body">
                      <div className="form-group row align-items-center">
                        <label for="store_name" className="form-control-label col-sm-3 text-md-right">Store Name</label>
                        <div className="col-sm-6 col-md-9">
                          <input type="text" name="store_name" className="form-control" id="store_name" value="<?php echo $row['store_name'];?>" required />
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label for="store_address" className="form-control-label col-sm-3 text-md-right">Store Address</label>
                        <div className="col-sm-6 col-md-9">
                          <textarea className="form-control" name="store_address" id="store_address" required></textarea>
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label className="form-control-label col-sm-3 text-md-right">Store Logo</label>
                        <div className="col-sm-6 col-md-9">
                          <div className="custom-file">
                            <input type="file" name="store_logo" className="custom-file-input" id="store-logo" />
                            <label className="custom-file-label">Choose File</label>
                          </div>
                          <div className="form-text text-muted">The image must have a maximum size of 1MB</div>
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label for="phone_number" className="form-control-label col-sm-3 text-md-right">Phone Number</label>
                        <div className="col-sm-6 col-md-9">
                          <input type="text" name="phone_number" className="form-control" id="phone_number" value="<?php echo $row['store_phone'];?>" required />
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label for="tax_id" className="form-control-label col-sm-3 text-md-right">Tax ID / GST NO</label>
                        <div className="col-sm-6 col-md-9">
                          <input type="text" name="tax_id" className="form-control" id="tax_id" value="<?php echo $row['tax_id'];?>" required />
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label for="invoice_footer" className="form-control-label col-sm-3 text-md-right">Invoice Footer Content</label>
                        <div className="col-sm-6 col-md-9">
                          <textarea className="form-control" name="invoice_footer" id="invoice_footer" required></textarea>
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label for="printer" className="form-control-label col-sm-3 text-md-right">Shared Name Of Printer</label>
                        <div className="col-sm-6 col-md-9">
                          <input type="text" name="printer" className="form-control" id="printer" value="<?php echo $row['printer'];?>" required />
                        </div>
                      </div>
                      <input type="text" name="process" className="form-control" value="update-store" required hidden readonly />
                    </div>
                    <div className="card-footer bg-whitesmoke text-md-right">
                      <button className="btn btn-primary" id="save-btn">Save Changes</button>
                      <button className="btn btn-secondary" type="button">Reset</button>
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

export default SettingsGeneral