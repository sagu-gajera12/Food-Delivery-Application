import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Card1 from './Card';

const Product = ({products,AddCart,UpdateQuantity}) =>{
   
   
   

      useEffect(()=>{
        document.title="product"
        console.log(products);
      },[])


     
// return <>hello World</>
      

     return (
          <Row xs="auto"  className="g-4">
          { products.map((product,index)=>{
            
        return   <Card1 id={product.id} src={product.src} title={product.title} text={product.text} AddCart={AddCart} quantity={product.quantity} price={product.price} UpdateQuantity={UpdateQuantity}></Card1>
          })}
          </Row>)
}

export default Product;