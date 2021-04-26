import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

import customersList from '../../../customers.json'
import CustomerForm from './CustomerForm/CustomerForm';
import CustomerBox from './CustomerBox/CustomerBox';
import CustomerNameSearch from './SearchCustomersName/Filter'

import '../Home-Customer/Style/HomeCustomerStyle.css'



export class HomeCustomer extends Component {
    state = {
        customerState: customersList,
        filteredCustomerNameListState: [],
        showRealCustomerType: false,
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
        var customerIndex = customerCopy.findIndex((item) => item.id === customerId);
        customerCopy.splice(customerIndex, 1);
        this.setState({
            customerState: customerCopy
        });
    }

    // handleEditCustomer() - customer's info will change thanks to this function.
    handleEditCustomer = (customerId) => {
        const customerCopy = this.state.customerState;
        const customerIndex = customerCopy.findIndex((item) => item.id === customerId);

        // console.log(customerCopy[customerIndex])
        this.props.history.push({
            pathname: "/editCustomer",
            state: customerCopy[customerIndex]
        });

    }

    // filter customer name according to the incoming search value
    handleFilterCustomerName = (searchInput) => {
        const stateCopy = { ...this.state };
        const filteredCustomersList = stateCopy.customerState.filter((customerItem) =>
            customerItem.customerName.toLowerCase().includes(searchInput.toLowerCase())
        );
        stateCopy.filteredCustomerNameListState = filteredCustomersList;
        stateCopy.searching = true;

        this.setState(stateCopy);
    };


    render() {
        return (
            <div>
                <div className="add-filter-part">
                <CustomerNameSearch handleFilterSearch={this.handleFilterCustomerName} />
                    {/* Button to toggle addCustomer form */}
                    <button type="button" className="btn btn-secondary"onClick={this.handleRenderForm}>Add New Customer</button>
                
                    {/* Toggle the form when this.state.form has the value of "true"*/}
                    {this.state.form && (
                        <CustomerForm handleLiftCustomerFormState={this.handleAddNewCustomer} />
                    )}
                    
                </div>

                <div>
                    <Table striped bordered hover className="customers-info-table">
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Customer Type</th>
                                <th>Customer Title</th>
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

                        {this.state.searching
                            ? this.state.filteredCustomerNameListState.map((Customer, index) => (
                                <CustomerBox
                                    key={index}
                                    {...Customer}
                                    clickToDelete={this.handleDeleteCustomer}
                                    clickToEdit={this.handleEditCustomer}
                                />
                            ))
                            : this.state.customerState.map((Customer, index) => (
                                <CustomerBox
                                    key={index}
                                    {...Customer}
                                    clickToDelete={this.handleDeleteCustomer}
                                    clickToEdit={this.handleEditCustomer}
                                />
                                
                            ))
                           
                        }
                    </Table>
                </div>
            </div>
        )
    }
}

export default HomeCustomer
