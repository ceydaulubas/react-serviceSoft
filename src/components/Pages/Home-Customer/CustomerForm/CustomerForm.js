import React, { useState } from 'react';

import './form.css'

const InitialState = {
  "customerName": "",
  "customerType": "",
  "customerTitle": "",
  "customerRole": "",
  "gsm": 90,
  "email": "",
  "website": "",
  "relatedFirm": "",
  "adress": "",
  "note": "",
  "file": "",
};

const HomeCustomers = (props) => {

  const [formState, setFormState] = useState(InitialState);

  const handleInputChange = (event) => {

    // inputValue - the data coming in from the input fields
    let inputValue = event.target.value;
    let inputName = event.target.name;
    let inputType = event.target.type;

    if (inputType === 'number') {
      inputValue = parseInt(inputValue);
    }

    setFormState({ ...formState, [inputName]: inputValue });
  };

  // handleFormSubmit - send the data from the component's state to the state in HomeCustomer.js
  const handleFormSubmit = (event) => {
    event.preventDefault();

    props.handleLiftCustomerFormState(formState);
    setFormState(InitialState);
  };

  return (
    <div className="sidenav" >
    <h3>CREATE NEW CUSTOMER</h3>
        <form onSubmit={handleFormSubmit} className="customerForm">
        <label htmlFor="customerName">Customer Name </label>
          <input
            className="input"
            type="text"
            name="customerName"
            onChange={handleInputChange}
            value={formState.customerName}
            required
          />
          <br />

          <label htmlFor="customerType">Customer Type </label>
          <select
            className="input"
            type="text"
            name="customerType"
            onChange={handleInputChange}
            value={formState.customerType}
            
            required
          >
            <option value="Real">Real</option>
            <option value="Corporate Entity">Corporate Entity </option>
          </select>
          <br />

          <label htmlFor="customerTitle">Customer Title </label>
          <textarea rows="1" cols="40"
            className="input"
            type="text"
            name="customerTitle"
            onChange={handleInputChange}
            value={formState.customerTitle}
            required
          />
          <br />

          <label htmlFor="customerRole">Customer Role </label>
          <select
            className="input"
            type="text"
            name="customerRole"
            onChange={handleInputChange}
            value={formState.customerRole}
            required
          >
            <option value="React Dev.">React Dev.</option>
            <option value="Mern Dev.">Mern Dev. </option>
            <option value="Angular Dev.">Angular Dev.</option>
          </select>
          <br />

          <label htmlFor="gsm">GSM Number </label>
          <input
            className="input"
            type="tel"
            name="gsm"
            onChange={handleInputChange}
            value={formState.gsm}
            // pattern="+94[7-9]{2}-[0-9]{3}-[0-9]{4}"

            required
          />
          <br />

          <label htmlFor="email">E-mail </label>
          <input
            className="input"
            type="email"
            name="email"
            onChange={handleInputChange}
            value={formState.email}
            required
          />
          <br />

          <label htmlFor="website">Web Site </label>
          <input
            className="input"
            type="text"
            name="website"
            onChange={handleInputChange}
            value={formState.website}
            required
          />
          <br />

          <label htmlFor="relatedFirm">Related Firm </label>
          <select
            className="input"
            name="relatedFirm"
            onChange={handleInputChange}
            value={formState.relatedFirm}
            required
          >
            <option value="X Firm">X Firm</option>
            <option value="Y Firm">Y Firm</option>
            <option value="Z Firm">Z Firm</option>
            <option value="Q Firm">Q Firm</option>
          </select>
          <br />

          <label htmlFor="file">File </label>
          <input
            className="input"
            type="file"
            name="file"
            onChange={handleInputChange}
            value={formState.file}
          />
          <br />

          <label htmlFor="adress">Adress </label>
          <input
            className="input"
            type="text"
            name="adress"
            onChange={handleInputChange}
            value={formState.adress}
            required
          />

          <br />
          <label htmlFor="note">Note </label>
          <textarea rows="1" cols="40"
            className="input"
            type="text"
            name="note"
            onChange={handleInputChange}
            value={formState.note}
          />
          <br />
          <button className="customerFormButton">Create</button>
        </form>

    </div>
  )
}

export default HomeCustomers