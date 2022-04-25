import React from 'react'
import SideBar from '../Navigation/SideBar'
import TopBar from '../Navigation/TopBar'
import Footer from '../Navigation/Footer'

function StockDetails() {
  return (
    <div id="app">
    <div className="main-wrapper">
      <div className="navbar-bg"></div>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <div class="main-content">
        <section class="section mt-5">
            <form id="form-update-item" class="mt-5">
              <div class="form-group">
                <label for="inputAddress">Item Name</label>
                <input type="text" name="name" class="form-control" id="inputAddress" value="" required />
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="inputBarcode">Barcode</label>
                  <input type="text" name="barcode" class="form-control" id="inputBarcode" value="" />
                </div>
                <div class="form-group col-md-8">
                  <label for="inputSupplier">Supplier</label>
                  <input type="text" name="supplier" class="form-control" id="inputSupplier" value="" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-2">
                  <label for="inputQuantity">Total Quantity</label>
                  <input type="text" name="quantity" class="form-control" id="inputQuantity" value="" required />
                </div>
                <div class="form-group col-md-2">
                  <label for="inputQtype">Quantity Type</label>
                  <select id="inputQtype" class="form-control" name="quantity_type" required>
                    <option selected="" value="<?php echo $row['quantity_type'];?>"></option>
                    <option value="Number">Number</option>
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="lbs">lbs</option>
                    <option value="ml">ml</option>
                    <option value="Litre">Litre</option>
                    <option value="Bundle">Bundle</option>
                    <option value="Meter">Meter</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputMinstock">Minimum Stock Level</label>
                  <input type="text" name="low_quantity" class="form-control" id="inputMinstock" value="" />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputLcost">Landing Cost (Including TAX)</label>
                  <input type="text" name="landing_cost" class="form-control" id="inputLcost" value="" required />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputPrice">MRP / Price (Including TAX)</label>
                  <input type="text" name="price" class="form-control" id="inputPrice" value="" required />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputTaxpercent">Tax in Percentage %</label>
                  <input type="text" name="tax_percent" class="form-control" id="inputTaxpercent" value="" />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputTaxamount">Tax Amount</label>
                  <input type="text" name="tax_amount" class="form-control" id="inputTaxamount" value="" />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputSprice">Selling Price (Including TAX)</label>
                  <input type="text" name="selling_price" class="form-control border border-warning" id="inputSprice" value="" required />
                </div>
                <div class="form-group col-md-3 pl-5 mt-4">
                  <input class="form-check-input" name="show_enabled" type="checkbox" id="defaultCheck1" value="false" />
                  <label class="form-check-label text-danger" for="defaultCheck1">
                    <b>Not-Tax Item</b>
                  </label>
                </div>
                <input type="text" name="sl_no" id="id" value="<?php echo $sl_no; ?>" class="form-control"readonly hidden />
                <input type="text" name="process" value="update-item" class="form-control"readonly hidden />
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <button type="button" id="delete_btn" class="btn btn-danger">&nbsp; Delete &nbsp;</button>
                  <a href="javascript: history.go(-1)" class="btn btn-info" >Back to Stock</a>
                  <button type="submit" id="add-btn" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </form>
        </section>
      </div>
      <Footer></Footer>
    </div>
  </div>
  )
}

export default StockDetails