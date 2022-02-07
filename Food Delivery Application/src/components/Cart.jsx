import axios from "axios";
import React, { useState } from "react";
import { Badge, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card1 from "./Card";
const Cart = ({ cartProduct, UpdateQuantity, amount }) => {

  const [finalAmount, setFinalAmount] = useState({ amount: amount });


  async function displayRazorpay() {
    setFinalAmount({ amount: amount });
    console.log(finalAmount);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    let data;

    await axios.post("http://localhost:8081/create_order", finalAmount).then(
      (response) => {
        console.log(response);

        data = response.data;
      },
      (error) => {
        console.log(error);
      }
    );

    console.log(data);
    const options = {
      key: "rzp_test_3KvzsvgNcPRBKc",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name:'sagar',
        email: "sdfdsjfh2@ndsfdf.com",
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <>
      <Row xs={4} md={2} className="g-4">
        {cartProduct.map((product, index) => {
          return (
            product.quantity > 0 && (
              <Card1
                id={index}
                src={product.src}
                title={product.title}
                text={product.title}
                price={product.price}
                quantity={product.quantity}
                UpdateQuantity={UpdateQuantity}
              ></Card1>
            )
          );
        })}
      </Row>
      <div className="m-3" style={{ color: "white" }}>
        <h2>
          Total Amount <Badge bg="secondary">{amount}</Badge>
        </h2>
        <Button variant="success" onClick={()=>{
      
              let copyOfFinalAmount=finalAmount;
              copyOfFinalAmount.amount=amount;
              setFinalAmount(copyOfFinalAmount);
           //   console.log(finalAmount+" "+amount);
          displayRazorpay();
        }
        }>
          Pay
        </Button>
      </div>
    </>
  );
};

export default Cart;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
