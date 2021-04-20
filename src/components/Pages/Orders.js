import React, { Component } from 'react'

import '../../App.css';
import ComingSoon from '../../Images/coming-soon.png'

class Orders extends Component {
    render() {
        return (
            <div>
            <img className= "coming-soon" src={ComingSoon}  alt="coming soon" ></img>
        </div>
        )
    }
}

export default Orders
