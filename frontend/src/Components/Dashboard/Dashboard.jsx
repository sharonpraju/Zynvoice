import React from 'react'
import SideBar from '../Navigation/SideBar'
import TopBar from '../Navigation/TopBar'
import Footer from '../Navigation/Footer'

function Dashboard() {
  return (
    <div id="app">
    <div className="main-wrapper">
      <div className="navbar-bg"></div>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <div className="main-content">
        <section className="section">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card card-statistic-2">
                <div className="card-stats">
                  <div className="card-stats-title">Order Statistics -
                    <div className="dropdown d-inline">
                      <a className="font-weight-600 " data-toggle="dropdown" href="#" id="orders-month">Today</a>
                    </div>
                  </div>
                  <div className="card-stats-items">
                    <div className="card-stats-item">
                      <div className="card-stats-item-count"></div>
                      <div className="card-stats-item-label">Sales</div>
                    </div>
                    <div className="card-stats-item">
                      <div className="card-stats-item-count"></div>
                      <div className="card-stats-item-label">Profit</div>
                    </div>
                    <div className="card-stats-item">
                      <div className="card-stats-item-count"></div>
                      <div className="card-stats-item-label">Purchase</div>
                    </div>
                  </div>
                </div>
                <div className="card-icon shadow-primary bg-primary">
                  <i className="fas fa-archive"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Number of Sales</h4>
                  </div>
                  <div className="card-body">
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card card-statistic-2">
                <div className="card-chart">
                  <canvas id="balance-chart" height="80"></canvas>
                </div>
                <div className="card-icon shadow-primary bg-primary">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Purchase</h4>
                  </div>
                  <div className="card-body">
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card card-statistic-2">
                <div className="card-chart">
                  <canvas id="sales-chart" height="80"></canvas>
                </div>
                <div className="card-icon shadow-primary bg-primary">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Sales</h4>
                  </div>
                  <div className="card-body">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h4>Budget vs Sales</h4>
                </div>
                <div className="card-body">
                  <canvas id="myChart" height="158"></canvas>
                </div>
                <div className="card-footer pt-0 d-flex justify-content-center">
                  <div className="budget-price justify-content-center">
                    <div className="budget-price-square bg-primary" data-width="20"></div>
                    <div className="budget-price-label">Sales</div>
                  </div>
                  <div className="budget-price justify-content-center">
                    <div className="budget-price-square bg-danger" data-width="20"></div>
                    <div className="budget-price-label">Purchase</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card gradient-bottom">
                <div className="card-header">
                  <strong className="text-dark pr-4">Low stock quantity items.</strong>
                  <a className="badge badge-danger badge-sm text-white">Stock</a> 
                </div>
                <div className="card-body" id="top-5-scroll">
                  <ul className="list-unstyled list-unstyled-border">
                    <li className="media">
                      <img className="mr-3 rounded" width="55" src="assets/img/products/product-2-50.png" alt="product"/>
                      <div className="media-body">
                        <div className="float-right"><div className="font-weight-600 text-muted text-small"><span className="badge badge-warning"> </span></div></div>
                        <div className="media-title"></div>
                        <div className="mt-1">
                          <div className="budget-price">
                            <div className="budget-price-square bg-primary" data-width="100%"></div>
                            <div className="budget-price-label"></div>
                          </div>
                          <div className="budget-price">
                            <div className="budget-price-square bg-danger" data-width="<?php echo $percentage;?>%"></div>
                            <div className="budget-price-label"></div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-footer  p-4 pt-4 d-flex justify-content-center">
                  <div className="budget-price justify-content-center">
                    <div className="budget-price-square bg-primary" data-width="20"></div>
                    <div className="budget-price-label">Minimum Stock</div>
                  </div>
                  <div className="budget-price justify-content-center">
                    <div className="budget-price-square bg-danger" data-width="20"></div>
                    <div className="budget-price-label">Available Stock</div>
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

export default Dashboard