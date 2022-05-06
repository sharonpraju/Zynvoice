import React from 'react'
import SideBar from '../Navigation/SideBar'
import TopBar from '../Navigation/TopBar'
import Footer from '../Navigation/Footer'

function SalesReport() {
  return (
    <div id="app">
    <div className="main-wrapper">
      <div className="navbar-bg"></div>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <div className="main-content">
        <section className="section">
            <div className="section-header">
                <h1>Sales Report</h1>
                <div className="section-header-breadcrumb">
                  <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                  <div className="breadcrumb-item">Sales Report</div>
                </div>
            </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card card-statistic-1">
                      <div className="card-icon bg-primary">
                        <i className="far fa-user"></i>
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card card-statistic-1">
                      <div className="card-icon bg-danger">
                        <i className="far fa-newspaper"></i>
                      </div>
                      <div className="card-wrap">
                        <div className="card-header">
                          <h4>Tota Profit</h4>
                        </div>
                        <div className="card-body">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card card-statistic-1">
                      <div className="card-icon bg-warning">
                        <i className="far fa-file"></i>
                      </div>
                      <div className="card-wrap">
                        <div className="card-header">
                          <h4>Total Discount</h4>
                        </div>
                        <div className="card-body">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card card-statistic-1">
                      <div className="card-icon bg-success">
                        <i className="fas fa-circle"></i>
                      </div>
                      <div className="card-wrap">
                        <div className="card-header">
                          <h4>Total Tax</h4>
                        </div>
                        <div className="card-body">
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
                <div>
                    <button className="btn btn-warning btn-icon icon-left mt-2" onclick="window.history.go(-1); return false;">
                     <i className="fa fa-arrow-left"></i> &nbsp; <b>Back to Date Selection</b>
                    </button>
                    <div className="btn-group float-right mt-2">
                      <span className="btn btn-primary">Date : <b></b> to <b></b> <span className="font-weight-bolder">(Including Both Days)</span></span>
                    </div>
                    <br/><br/>
                    <table id="example" className="display w-100">
                    <thead>
                    <tr>
                        <th>Sl.NO</th>
                        <th>Item</th>
                        <th>Qty</th>
                        <th></th>
                        <th>Price(MRP)</th>
                        <th>Selling Price</th>
                        <th>Tax Percent(%)</th>
                        <th>Tax Amount</th>
                        <th>Total Discount</th>
                        <th>Total(selling Price)</th>
                    </tr>
                    </thead>
                    <tbody className="table table-striped">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                    </table>
                </div>

            <div className="d-flex justify-content-center">
                <div className="card" id="sample-login">
                  <form action="#" method="GET">
                    <div className="card-header">
                      <h4>Generate Report</h4>
                    </div>
                    <div className="card-body pb-0">
                      <p className="text-muted">Please Select a starting date and an ending date for generating the report.</p>
                      <div className="form-group">
                        <label>Starting Date</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-calendar"></i>
                            </div>
                          </div>
                          <input type="date" id="date_start" name="date_start" className="form-control" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>End Date</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-calendar"></i>
                            </div>
                          </div>
                          <input type="date" id="date_end" name="date_end" className="form-control" required />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" onclick="showProgress();" className="btn btn-warning">Generate Report</button>
                      <a href="#" className="ml-2">Need Help?</a>
                      <div className="float-right">
                        <input className="form-check-input ml-2 mt-3 float-right" name="show_all" type="checkbox" id="defaultCheck1" value="true" />
                        <label className="form-check-label text-danger pt-3 pl-4" for="defaultCheck1">
                          <b>Show all (Including Non-Tax)</b>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
            </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  </div>
  )
}

export default SalesReport