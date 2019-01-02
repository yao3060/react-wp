import React from "react"
import { Link } from 'react-router-dom'
import { connect } from "react-redux"

import { Navbar,   NavDropdown, MenuItem } from "react-bootstrap"

class Navi extends React.Component {

    render() {

        const { isAuthed } = this.props
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Logo</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <ul className="nav navbar-nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </ul>
                { isAuthed ? (
                    <ul className="nav navbar-nav navbar-right hidden-sm">
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                ): (
                    <ul className="nav navbar-nav navbar-right hidden-sm">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                )}
                
            </Navbar>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isAuthed: state.auth.isAuthed
    }
}

export default connect(mapStateToProps)(Navi)