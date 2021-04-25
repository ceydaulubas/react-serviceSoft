import React from 'react';

import { Navbar, Nav} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">ServicePlatform</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href= "/customers" >Customers</Nav.Link>                
                </Nav>
                <Nav>
                    <Nav.Link href= "/products">Products</Nav.Link>
                    <Nav.Link href="/orders">Orders</Nav.Link>
                    <Nav.Link href="/invoiceInfo">Invoice Info</Nav.Link>
                    <Nav.Link href="/maintenancePrograms">Maintenance Programs</Nav.Link>
                    <Nav.Link href="/portalInfo">Portal Info</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;