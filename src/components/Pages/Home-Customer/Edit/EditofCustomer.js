import React from 'react'

import {Form, Button} from 'react-bootstrap'

const EditOfCustomer = () => {
    return (
        <div>
        {/* <Form style={{ width: '25%', margin: '2%' }}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Customer Name</Form.Label>
    <Form.Control type="email" placeholder="Customer Name" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Customer Role</Form.Label>
    <Form.Control type="password" placeholder="Customer Role" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>GSM Number</Form.Label>
    <Form.Control type="password" placeholder="GSM Number" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>E-Mail</Form.Label>
    <Form.Control type="password" placeholder="E-Mail" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}

<form 
// onSubmit={handleFormSubmit} className="insuranceForm"
>

        <label htmlFor="customerName">Customer Name: </label>
        <textarea rows="1" cols="40"
          className="input"
          type="text"
          name="customerName"
        //   onChange={handleInputChange}
        //   value={formState.customerName}

        />
        <br />
        <label htmlFor="customerRole">Customer Role: </label>
        <select
          className="input"
          type="text"
          name="customerType"
        //   onChange={handleInputChange}
        //   value={formState.customerType}
        >
          <option value="Real">x</option>
          <option value="corporate entity">y </option>
        </select>
        <br />
        <label htmlFor="gsm">GSM Number: </label>
        <input
          className="input"
          type="tel"
          name="gsm"
          pattern="+94[7-9]{2}-[0-9]{3}-[0-9]{4}"
           value="+90"
        //   onChange={handleInputChange}
        //   value={formState.gsm}
        />
        <br />

        <label htmlFor="email">E-mail </label>
        <input
          className="input"
          type="email"
          name="email"
        //   onChange={handleInputChange}
        //   value={formState.email}
        required
        />
        <button className="CustomerEditFormButton">Edit</button>
      </form>
            
        </div>
    )
}

export default EditOfCustomer;