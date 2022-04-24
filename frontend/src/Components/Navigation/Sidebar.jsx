import React from 'react'

function SideBar() {
  return (
    <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand ml-n3">
            <a href="dashboard.php"><img src="assets/img/logo.png" width="120px" height="37.58px"/></a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="dashboard.php"><img src="assets/img/icon.png" width="20px" height="20px"/></a>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Dashboard</li>
            <li>
              <a href="dashboard.php" className="font-weight-bold"><i className="fas fa-fire text-warning"></i><span>Dashboard</span></a>
            </li>
            <li className="menu-header">Inventory</li>
            <li>
              <a href="stock.php" className="font-weight-bold"><i className="fas fa-rocket text-info"></i><span>Stock</span></a>
            </li>
            <li>
              <a href="sales.php" className="font-weight-bold"><i className="fas fa-shopping-bag text-danger"></i><span>Sales</span></a>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-book text-success"></i><span>Reports</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="sales-report.php">Sales Report</a></li>
                <li><a className="nav-link" href="purchase-report.php">Purchase Report</a></li>
              </ul>
            </li>
            <li className="menu-header">Management</li>
            <li>
              <a href="settings.php" className="font-weight-bold"><i className="fas fa-cog text-primary"></i><span>Settings</span></a>
            </li>
          </ul>
          <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
            <a href="logout.php" className="btn btn-danger btn-lg btn-block btn-icon-split">
              <i className="fas fa-power-off"></i> Logout
            </a>
          </div>
        </aside>
    </div>
  )
}

export default SideBar