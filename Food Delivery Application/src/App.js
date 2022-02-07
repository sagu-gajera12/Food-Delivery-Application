import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {Container, Row, Col } from "react-bootstrap";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Display from "./components/Display";
import src from './components/image/food.jpg'
//import './style.css';
function App() {
  const [products, setProducts] = new useState([]);
  const [amount, setAmount] = new useState(0);
  let id=0;

  

  const addProduct = (product) => {
    let copyOfProducts = products;

    copyOfProducts.push({
      id: id,
      title: product.name,
      price: product.price,
      rname: product.rName,
      src: src,
    });
    id++;
    setProducts(copyOfProducts);
    console.log(products);
  };

  const UpdateQuantity = (id, opration) => {
    let product = [...products];
    if (opration == "plus") {
      product[id].quantity++;
      setAmount(amount + product[id].price);
    } else {
      if (product[id].quantity > 0) {
        product[id].quantity--;
        setAmount(amount - product[id].price);
      }
    }
    setProducts(product);

    console.log("set" + product[id].quantity);
  };

  return (
    <Router>
      <Container style={{ backgroundColor: "" }}>
        <Header></Header>

        <Row>
          <Col md={12}>
            <Routes>
              <Route path="/home" element={<Home></Home>} />
              <Route path="/login" element={<Login></Login>} />
              <Route path="/signup" element={<SignUp></SignUp>} />
  
              <Route
                path="/login/display/*"
                element={
                  <Display
                    products={products}
                    UpdateQuantity={UpdateQuantity}
                    addProduct={addProduct}
                    amount={amount}
                  ></Display>
                }
              />
              <Route
                path="/signup/display/*"
                element={
                  <Display
                    products={products}
                    UpdateQuantity={UpdateQuantity}
                    addProduct={addProduct}
                    amount={amount}
                  ></Display>
                }
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
