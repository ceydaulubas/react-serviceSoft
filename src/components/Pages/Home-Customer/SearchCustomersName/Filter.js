import React from 'react'
import '../Style/HomeCustomerStyle.css'

import TextField from '@material-ui/core/TextField';

const CustomerNameSearch = (props) => {

    // handleSearchInput() - monitor all the changes coming into the input field and change the state
    const handleSearchInput = (event) => {
        let inputValue = event.target.value;
        console.log(event.target);
        props.handleFilterSearch(inputValue);
    };

    return (

        <TextField
            id="filled-basic"
            label="Filter by Customer's Name.." 
            variant="filled"
            className="customerNameSearch"
            name="search"
            type="text"
            onChange={handleSearchInput}
        />

        // <input
        //     className="customerNameSearch"
        //     name="search"
        //     type="text"
        //     placeholder="Filter by Customer's Name.."
        //     onChange={handleSearchInput} />
    )
}

export default CustomerNameSearch;