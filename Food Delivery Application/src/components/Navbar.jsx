import React from 'react';
import { Button, Container ,Nav ,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom'
const Header = () =>{

    return (
        <div className=' text-center' style={{ background:'white', width: '100%' }}>
 <Nav  defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link Style={{color:'white'}}  as={Link} to="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link  Style={{color:'white'}} as={Link} eventKey="link-1" to="/login">User Sign up</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link Style={{color:'white'}} as={Link} eventKey="link-2" to="/signup">Restaurant Sign up</Nav.Link>
    </Nav.Item>
</Nav>

</div>


    )
}
export default Header;