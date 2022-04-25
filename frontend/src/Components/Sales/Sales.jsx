import React from 'react'
import SideBar from '../Navigation/SideBar'
import TopBar from '../Navigation/TopBar'
import Footer from '../Navigation/Footer'

function Sales() {
  return (
    <div id="app">
    <div className="main-wrapper">
      <div className="navbar-bg"></div>
      <TopBar></TopBar>
      <SideBar></SideBar>
        <div className="modal fade" id="DeleteModal" tabindex="-1" role="dialog" aria-labelledby="DeleteModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="DeleteModalLabel">Confirm Deleting</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Do you really want to delete all the items?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onclick="remove_all_sales();">Delete</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="PrintModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" aria-labelledby="PrintModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="PrintModalLabel">Invoice Printing</h5>
                <button type="button" className="close" data-dismiss="modal" onClick="window.location.reload();" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="spinner-border text-info spinner-border-sm" role="status">
                  <span className="sr-only">Loading...</span>
                </div> <small><b>Processing, Please Wait.</b></small>
                <br/><br/>
                <div>
                The invoice is being printing, you can find the details of previous invoices on <a href="sale-history.php">Sales History</a>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick="window.location.reload();">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="lowalertModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" aria-labelledby="AletrModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-warning" id="AletrModalLabel">Low Quantity</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick="window.location.reload();">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <b>Only <span className="font-weight-bolder" id="ava_qty"></span>
                <span className="font-weight-bolder" id="qty_type"></span> of 
                <span className="font-weight-bolder" id="item"></span> is available on stock.</b>
                <br/><br/>
                <div>
                Please go to <a href="stock.php">Stock page</a> and add more quantities.
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick="window.location.reload();">Close</button>
              </div>
            </div>
          </div>
        </div>

      <div className="main-content">
        <section className="section">
            <br/><br/><br/><br/>
            <div className="container-fluid">
	            <div className="row">
	                <aside className="">
	                    <div className="card">
	                        <div className="table-responsive">
	                            <table className="table">
	                                <thead className="text-muted">
	                                    <tr className="small text-uppercase">
	                                        <th scope="col">Product</th>
                                            <th scope="col" width="120">Quantity</th>
	                                        <th scope="col" width="10"></th>
	                                        <th scope="col" width="150">Price (MRP)</th>
	                                        <th scope="col" width="150">Selling Price</th>
                                          <th scope="col" width="150">Total</th>
	                                        <th scope="col" ></th>
	                                    </tr>
	                                </thead>
	                                <tbody>
	                                    <tr>
                                            <td>
                                                <figcaption className="info"><b className="title text-dark" data-abc="true"></b></figcaption>
	                                        </td>
	                                        <td>
                                                <input type="text" className="form-control" onchange="update_qty();" value="" min="1" placeholder="Enter Quantity" autocomplete="off" required />
                                          </td>
                                          <td>
	                                          <small></small>
                                          </td>
	                                        <td>
	                                            <input type="text" className="form-control" onchange="update_price();" value="" autocomplete="off" required />
                                          </td>
	                                        <td>
	                                            <input type="text" className="form-control" onchange="update_selling_price();" value="" autocomplete="off" required />
                                          </td>
                                          <td>
	                                            <input type="text" className="form-control" value="" autocomplete="off" required readonly />
                                          </td>
	                                        <td> <a data-original-title="Remove" onclick="remove_item_sales();" className="btn btn-danger text-white" data-toggle="tooltip" data-abc="true"> <i className="fa fa-minus-square"></i></a></td>
                                        </tr>
	                                </tbody>
	                            </table>
	                        </div>
	                    </div>
                    </aside>
                        <div className="d-flex justify-content-center">
                            <div className="col-md-6 col-sm-12">
                                <div className="card">
                                  <div className="card-header">
                                  </div>
                                  <div className="card-body">
                                    <div className="empty-state" data-height="400" style={{height: '400px'}}>
                                      <div className="empty-state-icon">
                                        <i className="fas fa-question"></i>
                                      </div>
                                      <h2>We couldn&apos;t find any data</h2>
                                      <p className="lead">
                                          You haven't added any items to the sales invoice, you can add items from the above search bar.
                                      </p>
                                      <a href="#" className="mt-4 bb">Need Help?</a>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{width:'60%'}}>
	                        <div className="card-body">
                            <div className="card-title">
                                <b>Total Items :</b>
                                <br/>
                                <b>Total Quantity :</b>
                                <br/><br/>
                                <hr></hr>
                            </div>
	                            <form className="d-flex justify-content-center">
	                                <div className="form-group mr-1">
                                    <br/>
                                    <a href="#" className="btn btn-icon icon-left btn-danger" data-toggle="modal" data-target="#DeleteModal"><i className="fa fa-trash"></i> Delete All</a>
                                    </div>
                                    <div className="form-group mr-1">
                                    <br/>
                                    <a href="sales-history.php" className="btn btn-icon icon-left btn-success"><i className="fa fa-book"></i> Sales History</a>
                                    </div>
	                            </form>
	                        </div>
                        </div>
                        <div className="card" style={{width:'40%'}}>
	                        <div className="card-body">
	                            <dl className="dlist-align">
	                                <dt>Total price (MRPs):</dt>
	                                <dd className="text-right ml-3"></dd>
	                            </dl>
	                            <dl className="dlist-align">
	                                <dt>Discount:</dt>
	                                <dd className="text-right text-danger ml-3"></dd>
	                            </dl>
	                            <dl className="dlist-align">
	                                <dt>Total:</dt>
	                                <dd className="text-right text-dark b ml-3"><h5></h5></dd>
	                            </dl>
                                <hr/>
                                <div className="text-right">
                                  <input type="button" id="print_btn" className="btn btn-out btn-primary btn-square btn-main mt-2" data-abc="true" onclick="process_print_tax();" value="Save & Print (Tax Invoice)" />
                                  <input type="button" id="print_btn_1" className="btn btn-out btn-warning btn-square btn-main mt-2" data-abc="true" onclick="process_print();" value="Save & Print" />
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

export default Sales