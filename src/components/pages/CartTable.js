import React, { Component } from 'react'
import '../css/CartTable.css';
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'

function CartTable() {
    return (
      
      <table className="carttable">
          <thead>
              <tr className="carttable1">
                  <th>Artwork Name</th>
                  <th>Category</th>
                  <th>Artist</th>
                  <th>Price</th>
                  <th>Actions</th>
              </tr>
              <tr className="cart1">
                  <td>Summer Breeze</td>
                  <td>Painting</td>
                  <td>Nimal Perera</td>
                  <td>Rs. 2250 </td>
                  <td><i class="fa fa-trash" aria-hidden="true"></i></td>
              </tr>
              <tr></tr><br/><br/>
              <tr  >
                  <td></td>
                  <td></td>
                  <td class="total">Total :</td>
                  <td class="total">Rs. 2250</td>
                  <td></td>
              </tr>
          </thead>
      </table>
      
    )
  }
export default CartTable;