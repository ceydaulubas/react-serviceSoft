import React, { Component } from 'react'

// import IconButton from '@material-ui/core/IconButton';
// import {DeleteIcon} from '@material-ui/icons/DeleteIcon'
import Button from '@material-ui/core/Button';
import './box.css'

class CustomerBox extends Component {

  myConfirm = () => {
      alert("You are deleting" +" "+ (this.props.customerName)+ " "+ "customer");
      this.props.clickToDelete(this.props.id)
  };


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
          {/* <td><button><Link to={`/editCustomer/${ this.props.customerName }`}>Edit</Link></button></td> */}
          
          {/* <td><button><Link to={{pathname: '/editCustomer',state: this.props}}> Edit</Link></button></td> */}
          
          <td><Button variant="contained"onClick={() => this.props.clickToEdit(this.props.id)}> Edit </Button></td>
          <td><Button variant="contained" onClick={() => this.myConfirm()}> Delete </Button></td> 
          
  


        </tr>
      </tbody>
    )
  }
}

export default CustomerBox
