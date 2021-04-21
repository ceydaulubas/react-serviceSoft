import React, { Component } from 'react'

import { Link } from 'react-bootstrap'
import './box.css'

class CustomerBox extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.customerName}</td>
          <td>{this.props.customerType}</td>
          <td>{this.props.customerRole}</td>
          <td>{this.props.gsm}</td>
          <td>{this.props.email}</td>
          <td>{this.props.website}</td>
          <td>{this.props.relatedFirm}</td>
          <td>{this.props.adress}</td>
          <td>{this.props.file}</td>
          <td>{this.props.note}</td>
          <td><button>
          {/* <Link to={"/editCustomer/:key"}> */}
          Update
          {/* </Link>  */}
          </button></td>
          <td><button onClick={() => this.props.clickToDelete(this.props.id)}> Delete</button></td>


        </tr>
      </tbody>
    )
  }
}

export default CustomerBox
