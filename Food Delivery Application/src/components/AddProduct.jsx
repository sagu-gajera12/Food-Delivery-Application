import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddProduct = ({addProduct,rName}) => {

    const[food,setFood]=useState();

    const handleForm=(e)=>{
        setFood({...food,rName:rName})
    console.log(food);
    addProduct(food);
     e.preventDefault();
    }




  return (
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Food Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Food Name" onChange={(e)=>{
            setFood({...food,name:e.target.value})
            console.log(food);
        }} />
              </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Food Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Food Description" />
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Food Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Food Price" onChange={(e)=>{
            setFood({...food,price:e.target.value})
            console.log(food);
        }} /> 
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleForm}>
        Submit
      </Button>
    </Form>
  );
};

export default AddProduct;
