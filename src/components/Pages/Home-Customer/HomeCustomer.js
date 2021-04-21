import React, { Component } from 'react'

import customersList from '../../../customers.json'
import CustomerForm from './CustomerForm/CustomerForm';
import CustomerBox from './CustomerBox';


export class HomeCustomer extends Component {
    state = {
        customerState: customersList,
        form: false,
    };

    // handleRenderForm() - it changes the value of "form" in our state. Helps with rendering the customer form.
    handleRenderForm = () => {
        const stateCopy = { ...this.state };
        stateCopy.form = !this.state.form;
        this.setState(stateCopy);
    };

    // handleAddNewCustomer() - The function that will help CustomerForm.js to lift state.
    handleAddNewCustomer = (newCustomerItem) => {
        const stateCopy = { ...this.state };
        console.log(newCustomerItem)
        stateCopy.customerState = [...stateCopy.customerState, newCustomerItem];
        stateCopy.form = !stateCopy.form;
        this.setState(stateCopy);
    };

    // handleDeleteCustomer() - The function that will help delete selected customers info from box.
    handleDeleteCustomer = (customerId) => {
        const customerCopy = this.state.customerState;
        console.log(customerId);
        var customerIndex = customerCopy.findIndex((item) => item.id === customerId);
        customerCopy.splice(customerIndex, 1);
        this.setState({
            customerState:customerCopy });
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

                    {this.state.customerState.map((Customer, index) => (
                        <CustomerBox
                            key={index}
                            {...Customer}
                            clickToDelete={this.handleDeleteCustomer}


                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default HomeCustomer
