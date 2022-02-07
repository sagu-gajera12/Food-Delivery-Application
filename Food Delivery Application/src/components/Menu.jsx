import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menu = ({rUserName}) =>{

    return (
        <div style={{position: 'fixed', width:'25%'}}>
     <ListGroup >
       

         <Link className='list-group-item' tag="a" to="product" action> Product</Link>
         {rUserName.value &&<Link className='list-group-item' tag="a" to="addProduct" action> AddProduct</Link>}       
        <Link className='list-group-item' tag="a" to="cart" action> Cart</Link>

     </ListGroup>

</div>

    );
}

export default Menu;