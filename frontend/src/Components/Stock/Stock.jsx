import React from 'react'
import SideBar from '../Navigation/SideBar'
import TopBar from '../Navigation/TopBar'
import Footer from '../Navigation/Footer'

function Stock() {
  return (
    <div id="app">
    <div className="main-wrapper">
      <div className="navbar-bg"></div>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <div className="modal" id="modal-add-item" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Item</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="">
                  <div className="">
                    <form id="form-add-item">
                      <div className="form-group">
                        <label for="inputAddress">Item Name</label>
                        <input type="text" name="name" className="form-control" id="inputAddress" placeholder="Eg: A4 Paper Bundle" autocomplete="off" required/>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputBarcode">Barcode</label>
                          <input type="text" name="barcode" className="form-control" id="inputBarcode" placeholder="Enter Barcode (Optional)" autocomplete="off"/>
                        </div>
                        <div className="form-group">
                          <label for="inputSupplier">Supplier</label>
                          <input type="text" name="supplier" className="form-control" id="inputSupplier" placeholder="Enter Supplier (Optional)" autocomplete="off"/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <label for="inputQuantity">Total Quantity</label>
                          <input type="text" name="quantity" className="form-control" id="inputQuantity" placeholder="Total Quantity" autocomplete="off" required/>
                        </div>
                        <div className="form-group col-md-3">
                          <label for="inputQtype">Quantity Type</label>
                          <select id="inputQtype" className="form-control" name="quantity_type" autocomplete="off" required>
                            <option selected="" value="Number">Number</option>
                            <option value="kg">kg</option>
                            <option value="g">g</option>
                            <option value="lbs">lbs</option>
                            <option value="ml">ml</option>
                            <option value="Litre">Litre</option>
                            <option value="Bundle">Bundle</option>
                            <option value="Meter">Meter</option>
                          </select>
                        </div>
                        <div className="form-group col-md-5">
                          <label for="inputMinstock">Minimum Quantity</label>
                          <input type="text" name="low_quantity" className="form-control" id="inputMinstock" placeholder="Enter Quantity (Optional)" autocomplete="off"/>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputLcost">Landing Cost (Including TAX) (per unit)</label>
                          <input type="text" name="landing_cost" className="form-control" id="inputLcost" placeholder="Enter Landing Cost" autocomplete="off" required/>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputPrice">MRP / Price (Including TAX)<br/>(per unit)</label>
                          <input type="text" name="price" className="form-control" id="inputPrice" placeholder="Enter MRP / Price" autocomplete="off" required/>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputSprice">Selling Price (Including TAX) (per unit)</label>
                          <input type="text" name="selling_price" className="form-control border border-warning" id="inputSprice" placeholder="Enter Selling Price" autocomplete="off" required/>
                        </div>
                        <div className="form-group col-md-6 pl-5 mt-5">
                          <input className="form-check-input" name="show_enabled" type="checkbox" id="defaultCheck1" value="false"/>
                          <label className="form-check-label text-danger" for="defaultCheck1">
                            <b>Non-Tax Stock</b><br/>
                          </label>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputTaxpercent">Tax in Percentage % (per unit)</label>
                          <input type="text" name="tax_percent" className="form-control" id="inputTaxpercent" placeholder="Enter Tax Percentage" value="0" autocomplete="off"/>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputTaxamount">Tax Amount (per unit)</label>
                          <input type="text" name="tax_amount" className="form-control" id="inputTaxamount" placeholder="Enter Tax Amount" value="0" autocomplete="off" required/>
                        </div>
                        <input type="text" name="process" value="add-item" className="form-control"readonly hidden/>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                        </div>
                        <div className="form-group col-md-6">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">&nbsp; Close &nbsp;</button>
                          <button type="submit" id="add-btn" className="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <section className="section">
            <div className="section-header">
                <h1>Manage Stock</h1>
                <div className="section-header-breadcrumb">
                  <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                  <div className="breadcrumb-item">Stock</div>
                </div>
            </div>
            <div className="container">
               <button className="btn btn-warning btn-icon icon-left" data-toggle="modal" data-target="#modal-add-item">
                 <i className="fa fa-plus"></i> &nbsp; <b>Add New Item</b>
                </button>
               <br/><br/>
                <table id="example" className="w-100">
                <thead>
                <tr>
                    <th>Sl.NO</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Mrp</th>
                    <th>Selling Price</th>
                    <th>Supplier</th>
                    <th>#</th>
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
                    <td><a className="btn btn-success btn-sm" href="stock-details.php?id=<?php echo $row['sl_no'];?>">Details</a></td>

                </tr>
                </tbody>
                </table>
            </div>
        </section>


      </div>
      <Footer></Footer>
    </div>
  </div>
  )
}

export default Stock