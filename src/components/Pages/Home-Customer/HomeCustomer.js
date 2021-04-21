import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

import customersList from '../../../customers.json'
import CustomerForm from './CustomerForm/CustomerForm';
import CustomerBox from './CustomerBox/CustomerBox';

import '../Home-Customer/CustomerBox/box.css'

export class HomeCustomer extends Component {
    state = {
        customerState: customersList,
        form: false,
    };

    // handleRenderForm() - it changes the value of "form" in our state. Helps with rendering the customer form. Like a Toggle Hide and Show.
    handleRenderForm = () => {
        const stateCopy = { ...this.state };
        stateCopy.form = !this.state.form;
        this.setState(stateCopy);
    };

    // handleAddNewCustomer() - The function that will help CustomerForm.js to lift state.
    handleAddNewCustomer = (newCustomerItem) => {
        const stateCopy = { ...this.state };
        stateCopy.customerState = [...stateCopy.customerState, newCustomerItem];
        stateCopy.form = !stateCopy.form;
        this.setState(stateCopy);
    };

    // handleDeleteCustomer() - The function that will help delete selected customer's id||key from box.
    handleDeleteCustomer = (customerId) => {
        const customerCopy = this.state.customerState;
        var customerIndex = customerCopy.findIndex((item) => item.key === customerId);
        customerCopy.splice(customerIndex, 1);
        this.setState({
            customerState: customerCopy
        });
    }

    // handleEditCustomer() - customer's info will change thanks to this function.
    // handleEditCustomer = (customerId) => {
    //     const customerCopy = { ...this.state.customerState};
    //     const customerIndex = customerCopy.findIndex((item) => item.id === customerId);
    //     customerCopy.splice(customerIndex, 1);
    //     this.setState({
    //         customerState:customerCopy });
    // }

    //handleFilterCustomerName


    render() {
        return (
            <div>

                {/* Button to toggle addCustomer form */}
                <button className="addCustomerButton" onClick={this.handleRenderForm}>
                    Create New Customer
        </button>
                {/* Toggle the form when this.state.form has the value of "true"*/}
                {this.state.form && (
                    <CustomerForm handleLiftCustomerFormState={this.handleAddNewCustomer} />
                )}

                <div>
                    <Table striped bordered hover className="table">
                        <thead>
                            <tr>
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
                        {this.state.customerState.map((Customer, index) => (
                            <CustomerBox
                                key={index}
                                {...Customer}
                                clickToDelete={this.handleDeleteCustomer}
                            
                            />
                        ))}
                    </Table>
                </div>
            </div>
        )
    }
}

export default HomeCustomer
