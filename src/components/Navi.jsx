import React from "react"
import { NavLink } from 'react-router-dom'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap"

export default class Navi extends React.Component {

    render() {

        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="/">Logo</NavLink>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/about">About</NavItem>
                    <NavItem eventKey={2} href="/contact">Contact</NavItem>
                    <NavItem eventKey={4} href="/blog">Blog</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav className="nav navbar-nav navbar-right hidden-sm">
                    <NavItem href="/login">Login</NavItem>
                    <NavItem href="/register">Register</NavItem>
                    <NavItem href="/logout">Logout</NavItem>
                </Nav>
            </Navbar>
        )
    }

}