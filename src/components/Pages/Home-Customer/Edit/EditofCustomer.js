import React, { useState } from 'react';
import './Edit.css'

// import {Form, Button} from 'react-bootstrap'

const EditOfCustomer = (props) => {

  const [formState, setFormState] = useState(props.location.state);

  console.log(props.location.state)
  const handleInputEdit = (event) => {

    // inputValue - the data coming in from the input fields
    let inputValue = event.target.value;
    let inputName = event.target.name;
    let inputType = event.target.type;

    if (inputType === 'number') {
      inputValue = parseInt(inputValue);
    }

    setFormState({ ...formState, [inputName]: inputValue });

  };

  return (
    <div>

      <div className="customer-info-editpage">
        <h4> Customer's Informations</h4>
        <hr />
        <ul>
          <li><img src="https://www.freeiconspng.com/uploads/profile-icon-9.png" alt="profileimg" width="100" height="100" /></li>
          <li>{props.location.state.customerName}</li>
          <li>{props.location.state.email}</li>
          <li>{props.location.state.gsm}</li>
        </ul>
        <hr />
        <div>
          <ul>
            <li></li>
            <li><b>Customer Type: </b> {props.location.state.customerType}</li>
            <li><b>Web Site: </b> {props.location.state.website}</li>
            <li><b>Related Firm: </b> {props.location.state.relatedFirm}</li>
            <li><b>Note:</b>  {props.location.state.note}</li>
            <li><b>File:</b>  {props.location.state.file}</li>

          </ul>
          <hr />
        </div>
      </div>


      <form onSubmit={EditOfCustomer} className="EditForm" >
        <label className="edit-label" htmlFor="customerName">Customer Name </label>
        <textarea rows="1" cols="40"
          className="edit-input"
          type="text"
          name="customerName"
          onChange={handleInputEdit}
          value={formState.customerName}

        />
        <br />
        <label className="edit-label" htmlFor="customerTitle">Customer Role </label>
        <select
          className="edit-input"
          type="text"
          name="customerRole"
          onChange={handleInputEdit}
          value={formState.customerRole}
        >
          <option value="React Dev.">React Dev.</option>
          <option value="Mern Dev.">Mern Dev. </option>
          <option value="Angular Dev.">Angular Dev.</option>
        </select>
        <br />
        <label className="edit-label" htmlFor="gsm">GSM Number </label>
        <input
          className="edit-input"
          type="tel"
          name="gsm"
          onChange={handleInputEdit}
          value={formState.gsm}
        />
        <br />

        <label className="edit-label" htmlFor="email">E-mail </label>
        <input
          className="edit-input"
          type="email"
          name="email"
          onChange={handleInputEdit}
          value={formState.email}
        />
        <br />
        <button className="CustomerEditFormButton" onClick={() => props.clickToEdit(props.id)}><b>Edit</b></button>
      </form>
    </div>
  )
}

export default EditOfCustomer;