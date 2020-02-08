import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
    UncontrolledDropdown
} from "reactstrap";
import {NavLink} from "react-router-dom";

export const Menu = (props) =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">React</NavLink>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/heroes" className="nav-link">Heroes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/scoreboard" className="nav-link">Scoreboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/products" className="nav-link">Products</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    )
};