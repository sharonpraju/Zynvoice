import React from 'react'

function Sidebar() {
  return (
    <div class="main-sidebar">
        <aside id="sidebar-wrapper">
          <div class="sidebar-brand ml-n3">
            <a href="dashboard.php"><img src="assets/img/logo.png" width="120px" height="37.58px"/></a>
          </div>
          <div class="sidebar-brand sidebar-brand-sm">
            <a href="dashboard.php"><img src="assets/img/icon.png" width="20px" height="20px"/></a>
          </div>
          <ul class="sidebar-menu">
            <li class="menu-header">Dashboard</li>
            <li>
              <a href="dashboard.php" class="font-weight-bold"><i class="fas fa-fire text-warning"></i><span>Dashboard</span></a>
            </li>
            <li class="menu-header">Inventory</li>
            <li>
              <a href="stock.php" class="font-weight-bold"><i class="fas fa-rocket text-info"></i><span>Stock</span></a>
            </li>
            <li>
              <a href="sales.php" class="font-weight-bold"><i class="fas fa-shopping-bag text-danger"></i><span>Sales</span></a>
            </li>
            <li class="dropdown">
              <a href="#" class="nav-link has-dropdown"><i class="fas fa-book text-success"></i><span>Reports</span></a>
              <ul class="dropdown-menu" style="display: none;">
                <li><a class="nav-link" href="sales-report.php">Sales Report</a></li>
                <li><a class="nav-link" href="purchase-report.php">Purchase Report</a></li>
              </ul>
            </li>
            <li class="menu-header">Management</li>
            <li>
              <a href="settings.php" class="font-weight-bold"><i class="fas fa-cog text-primary"></i><span>Settings</span></a>
            </li>
          </ul>
          <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
            <a href="logout.php" class="btn btn-danger btn-lg btn-block btn-icon-split">
              <i class="fas fa-power-off"></i> Logout
            </a>
          </div>
        </aside>
    </div>
  )
}

export default Sidebar