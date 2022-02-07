import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import Menu from "./Menu";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Product from "./Prodtct";
import Cart from "./Cart";
import { useEffect, useState } from "react";

import AddProduct from './AddProduct';



const Display = ({products,addProduct,UpdateQuantity,amount}) => {


  console.log(products);

  let location =useLocation();
  console.log(location.state);
  
 
  const[rName,setRName]=useState("sagar");
  let f=location.state!=null;
  let ob={value:location.state!=null};
  const[rUserName,setUserName]=useState(ob);
  
  
    

  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <Container style={{ height: "10vh" }}>
              <Menu rUserName={rUserName}></Menu>
            </Container>
          </Col>
          <Col md={8}>
            <Routes>

            
              <Route
                path="/product"
                element={
                  <Product products={products}  UpdateQuantity={UpdateQuantity}></Product>
                }
              />
              <Route
                path="/AddProduct"
                element={
                  <AddProduct rName={rName}  addProduct={addProduct}></AddProduct>
                }
              />
              <Route
                path="/cart"
                element={<Cart cartProduct={products} UpdateQuantity={UpdateQuantity} amount={amount}></Cart>}
              />

            </Routes>
          </Col>
        </Row>
      </Container>

      {/* <Router>
        <Container>
          <Row>
            <Col md={4}>
              <Menu></Menu>
            </Col>
            <Col md={8}>
              <Routes>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router> */}
    </>
  );
};

export default Display;
