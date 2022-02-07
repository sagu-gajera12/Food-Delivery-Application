import React, { useState } from 'react';
import { Button, Container ,Nav ,Navbar, Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const SignUp = () =>{

  const[rUsername,setRUserName]=useState();

  let navigate = useNavigate(); 
  const routeChange = (e) =>{ 
    let path = `display`; 
    navigate(path,{state:rUsername});
    e.preventDefault();
  }

    return (
         
<Form  onSubmit={routeChange}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Restaurant UserName</Form.Label>
    <Form.Control type="text" placeholder="Enter user name" onChange={(e)=>{
      setRUserName(e.target.value);
      console.log(rUsername);
    }} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="button" onClick={(e)=>{
    routeChange(e);
  }
  }>
    Submit
  </Button>
</Form>

    
    )
}
export default SignUp;