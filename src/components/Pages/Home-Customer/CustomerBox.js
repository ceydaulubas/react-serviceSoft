import React, { Component } from 'react'

import { Table } from 'react-bootstrap'

class CustomerBox extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover style={{ width: '70%', margin: '2%' }}>
                <thead>
          <tr>
            <th></th>
            <th>Customer Name</th>
            <th>Customer Type</th>
            <th>Customer Role</th>
            <th>GSM Number</th>
            <th>E-mail</th>
            <th>Web Site</th>
            <th>Related Firm</th>
            <th>Adress</th>
            <th>File</th>
            <th>Note</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
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
            <td><button> Update</button></td>
            <td><button onClick={this.props.clickToDelete}> Delete</button></td>
          </tr>
        </tbody>
      </Table>
            </div>
        )
    }
}

export default CustomerBox
