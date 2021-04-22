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
<form 
onSubmit={EditOfCustomer } className="EditForm"
>
        <label className="edit-label" htmlFor="customerName">Customer Name </label>
        <textarea rows="1" cols="40"
          className="edit-input"
          type="text"
          name="customerName"
          onChange={handleInputEdit}
          value={formState.customerName}

        />
        <br />
        <label className="edit-label" htmlFor="customerRole">Customer Role </label>
        <select
           className="edit-input"
          type="text"
          name="customerType"
          onChange={handleInputEdit}
          value={formState.customerType}
        >
          <option value="Real">x</option>
          <option value="corporate entity">y </option>
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
        <br/>
        <button className="CustomerEditFormButton" onClick={() => props.clickToEdit(this.props.id)}>Edit</button>
      </form>

<div>
       <h4> Customer Informations</h4>
<p>
{props.location.state.customerName}
</p>
<p>
{props.location.state.email}
</p>
<p>
{props.location.state.gsm}
</p>
</div> 
        </div>
    )
}

export default EditOfCustomer;