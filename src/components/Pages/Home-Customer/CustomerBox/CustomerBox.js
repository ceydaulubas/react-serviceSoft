import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import './box.css'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

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
          <td><IconButton onClick={() => this.props.clickToEdit(this.props.id)}><EditIcon/></IconButton></td>
          <td><IconButton onClick={() => this.myConfirm()}><DeleteIcon/></IconButton></td>


        </tr>
      </tbody>
    )
  }
}

export default CustomerBox
