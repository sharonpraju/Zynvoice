import React from 'react'
import SideBar from '../Navigation/SideBar'
import TopBar from '../Navigation/TopBar'
import Footer from '../Navigation/Footer'

function PurchaseReport() {
  return (
    <div id="app">
    <div className="main-wrapper">
      <div className="navbar-bg"></div>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <div className="main-content">
        <section className="section">
            <div className="section-header">
                <h1>Purchase Report</h1>
                <div className="section-header-breadcrumb">
                  <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                  <div className="breadcrumb-item">Purchase Report</div>
                </div>
            </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card card-statistic-1">
                      <div className="card-icon bg-primary">
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
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card card-statistic-1">
                      <div className="card-icon bg-danger">
                        <i className="far fa-file"></i>
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
                        <th width="150px">Invoice / Bill No</th>
                        <th>Comments</th>
                        <th>Supplier</th>
                        <th width="100px">Date of Purchase</th>
                        <th>Tax Amount</th>
                        <th>Landing Cost (Including Tax)</th>
                        <th></th>
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
                        <td><a className="btn btn-danger text-white" onClick="delete_purchase(<?php echo $row['sl_no'];?>);"><i className="fa fa-trash"></i></a></td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            <div className="d-flex justify-content-center">
                <div className="card">
                  <div className="card-body">
                    <ul className="nav nav-pills" id="myTab3" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active show" id="home-tab3" data-toggle="tab" href="#home3" role="tab" aria-controls="home" aria-selected="true">Add Purchase Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="profile-tab3" data-toggle="tab" href="#profile3" role="tab" aria-controls="profile" aria-selected="false">Generate Report</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent2">
                      <div className="tab-pane fade active show" id="home3" role="tabpanel" aria-labelledby="home-tab3">
                      <form id="form-add-purchase">
                            <div>
                              <p className="text-muted">Enter the details of the purchase invoice to add it to the Purchase Report.</p>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                      <label for="inputInvoice_no">Invoice Number (optional)</label>
                                      <input type="text" className="form-control" id="inputInvoice_no" name="invoice_number" placeholder="Invoice Number" />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <label for="inputComments">Comments (optional)</label>
                                      <input type="text" className="form-control" id="inputComments" name="comments" placeholder="Comments" />
                                    </div>
                                </div>
                                <div className="form-group">
                                  <label for="inputSupplier">Supplier</label>
                                  <input type="text" className="form-control" id="inputSupplier" name="supplier" placeholder="Enter Supplier Details" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                      <label for="inputlanding_cost">Total Landing Cost (Including Tax)</label>
                                      <input type="text" className="form-control" id="inputlanding_cost" name="landing_cost" placeholder="Landing Cost" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <label for="inputTax_amount">Tax Amount</label>
                                      <input type="text" className="form-control" id="inputTax_amount" name="tax_amount" placeholder="Tax Amount" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                          <label for="inputDate">Purchase Date</label>
                                          <input type="date" className="form-control" id="inputDate" name="purchase_date" />
                                    </div>
                                    <div className="form-group col-md-6 pl-5 mt-5">
                                      <input className="form-check-input" name="show_enabled" type="checkbox" id="defaultCheck1" value="false" />
                                      <label className="form-check-label text-danger" for="defaultCheck1">
                                        <b>Non-Tax Purchase</b>
                                      </label>
                                    </div>
                                    <input type="text" className="form-control" name="process" value="add_purchase" hidden readonly />
                                    
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                          <button type="submit" onclick="showProgress();" className="btn btn-warning col-md-12">Add Details</button>
                                    </div>
                                    <div className="d-flex justify-content-center mt-1 pl-5">
                                        <a href="#" className="ml-2">Need Help?</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                      </div>
                      <div className="tab-pane fade" id="profile3" role="tabpanel" aria-labelledby="profile-tab3">
                        <form action="#" method="GET">
                            <div>
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
                            <div>
                              <button type="submit" onclick="showProgress();" className="btn btn-warning">Generate Report</button>
                              <a href="#" className="ml-2">Need Help?</a>
                              <div className="float-right">
                                <input className="form-check-input ml-2 mt-3 float-right" name="show_all" type="checkbox" id="defaultCheck1" value="true" />
                                <label className="form-check-label text-danger pt-2 pl-4" for="defaultCheck1">
                                  <b>Show all (Including Non-Tax)</b>
                                </label>
                              </div>
                            </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="card" id="sample-login">
                  
                </div>
            </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  </div>
  )
}

export default PurchaseReport