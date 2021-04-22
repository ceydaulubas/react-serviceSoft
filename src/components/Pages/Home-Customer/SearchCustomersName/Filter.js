import React from 'react'
import '../Style/HomeCustomerStyle.css'

const CustomerNameSearch = (props) => {

    // handleSearchInput() - monitor all the changes coming into the input field and change the state
    const handleSearchInput = (event) => {
        let inputValue = event.target.value;
        console.log(event.target);
        props.handleFilterSearch(inputValue);
    };

    return (
            <input
                className="customerNameSearch"
                name="search"
                type="text"
                placeholder="Filter by Customer's Name.."
                onChange={handleSearchInput} />
    )
}

export default CustomerNameSearch;