import React from 'react'
import SideBar from '../Navigation/SideBar'
import TopBar from '../Navigation/TopBar'
import Footer from '../Navigation/Footer'

function SalesHistory() {
  return (
    <div id="app">
    <div className="main-wrapper">
      <div className="navbar-bg"></div>
      <TopBar></TopBar>
      <SideBar></SideBar>
      <div className="main-content">
          <br/><br/><br/><br/>
        <section className="section">
        <div>
            <h4>Sales History</h4>
            <br/><br/>
            <table id="example" className="display" style={{width:'100%'}}>
            <thead>
            <tr>
                <th>Sl.NO</th>
                <th>Invoice Number</th>
                <th>Added By</th>
                <th>Updated By</th>
                <th>Added On</th>
                <th>Updated On</th>
                <th>#</th>
            </tr>
            </thead>
            <tbody className="table table-striped">
                <tr>
                    <td></td>
                    <td><b className="text-warning"></b></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><a className="btn btn-success btn-sm" href="invoice-details.php?invoice_no=#">Details</a></td>
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

export default SalesHistory