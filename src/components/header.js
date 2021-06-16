import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import {Link} from 'react-router-dom'
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{justifyContent:'space-between'}}color="black" dark expand="md">
        <NavbarBrand href="/">Quizzer App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{marginLeft:'1200px'}}>
              <Link style={{color:'white',float:'right'}} to="/quiz">Want to Play Quiz Again?</Link>
            </NavItem>
           
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;