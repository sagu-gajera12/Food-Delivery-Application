
import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import bottle from './image/bottle.jpeg';

const Cards = ({title,text,src,id,quantity,price,UpdateQuantity,UpdateAmount}) =>{

    console.log("quantity "+quantity)

     return (
     <Col xs={3}>
     <Card >
     <Card.Img variant="top" src={src} />
     <Card.Body>
       <Card.Title>{title}</Card.Title>
       <Card.Text>{text}</Card.Text>
       <Card.Text>Price:{price}       </Card.Text>
       {
        quantity==0 &&  <Button variant="primary" onClick={()=>{
        //  AddCart(id,src,title,text,price,1);
         UpdateQuantity(id,"plus")
        
         quantity++;
         console.log(quantity);
    

       }}>Add to Cart</Button>
       }


       {
      quantity>0 && <Button variant="primary" onClick={()=>{

         UpdateQuantity(id,"minus")
      
    }}>-</Button>} {quantity>0 && quantity}{
            quantity>0 && <Button variant="primary" onClick={()=>{
         UpdateQuantity(id,"plus")
      
    }}>+</Button>
      
    }

     </Card.Body>
   </Card>
   </Col>
   )
}

export default Cards;