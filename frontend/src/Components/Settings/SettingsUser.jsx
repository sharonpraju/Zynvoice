import React from 'react'
import SideBar from '../Navigation/SideBar'
import TopBar from '../Navigation/TopBar'
import Footer from '../Navigation/Footer'

function SettingsUser() {
  return (
    <div id="app">
    <div class="main-wrapper">
      <div class="navbar-bg"></div>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <div class="modal" id="modal-add-user" tabindex="-1" role="dialog" aria-labelledby="add-user-ModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="add-user-ModalLabel">Add User</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="card">
                  <div class="card-body">
                    <form id="form-add-user">
                      <div class="form-group">
                        <label for="inputusername">Username</label>
                        <input type="text" name="username" class="form-control" id="inputusername" placeholder="Enter Username" required />
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputEmail">Email</label>
                          <input type="email" name="email" class="form-control" id="inputEmail" placeholder="Enter Email (Optional)" />
                        </div>
                        <div class="form-group">
                          <label for="inputPassword">Password</label>
                          <input type="Password" name="password" class="form-control" id="inputPassword" placeholder="Enter Password" required />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <label for="inputUsertype">User Type</label>
                          <select id="inputUsertype" class="form-control" name="user_type" required>
                            <option selected="" value="admin">Admin</option>
                            <option value="staff">Staff</option>
                          </select>
                        </div>
                        <input type="text" name="process" value="add-user" class="form-control" required readonly hidden />
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                        </div>
                        <div class="form-group col-md-6">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">&nbsp; Close &nbsp;</button>
                          <button type="submit" id="add-btn" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-content">
        <section class="section">
        <div class="section-header">
            <div class="section-header-back">
              <a href="settings.php" class="btn btn-icon"><i class="fas fa-arrow-left"></i></a>
            </div>
            <h1>User Management</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
              <div class="breadcrumb-item active"><a href="#">Settings</a></div>
              <div class="breadcrumb-item">User Management</div>
            </div>
          </div>

          <div class="section-body">
            <h2 class="section-title">All About User Management</h2>
            <p class="section-lead">
              You can manage all user account settings here
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
                      <li class="nav-item"><a href="#" class="nav-link active">User Management</a></li>
                      <li class="nav-item"><a href="settings-backup-restore.php" class="nav-link">Backup & Restore</a></li>
                      <li class="nav-item"><a href="settings-security.php" class="nav-link">Security</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <button class="btn btn-warning btn-icon icon-left" data-toggle="modal" data-target="#modal-add-user">
                  <i class="fa fa-plus"></i> &nbsp; <b>Add New User</b>
                 </button>
                <br/><br/>
                 <table id="example" class="display w-100">
                    <thead>
                    <tr>
                        <th>Sl.NO</th>
                        <th>Username</th>
                        <th>Type</th>
                        <th>#</th>
                    </tr>
                    </thead>
                    <tbody class="table table-striped"> 
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a class="btn btn-danger btn-sm text-white" onclick="remove_user('<?php echo $row['username'];?>');">Remove</a></td>

                    </tr>
                    </tbody>
                 </table>
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

export default SettingsUser