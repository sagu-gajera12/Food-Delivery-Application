import axios from 'axios';
import { Alert } from 'bootstrap';
import React, { useState } from 'react';

// const CheckOutForm= ()=>{
//   return <>hello world</>
// }

// export default CheckOutForm;

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

function CheckOutForm() {
	const [name, setName] = useState('Mehul')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		// const data = await fetch('http://localhost:8081/create_order', { method: 'POST' }).then((t) =>
		// 	t.json()
		// )
    let data;
  await  axios.post('http://localhost:8081/create_order').then(
      (response)=>{
       console.log(response);
        data=response.data;
      },
      (error)=>{
        console.error();
      }

    )

    console.log(data);
		const options = {
			key:'rzp_test_3KvzsvgNcPRBKc',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	return (
		<div className="App">
			<header className="App-header">
				
				<a
					className="App-link"
					onClick={displayRazorpay}
					target="_blank"
					rel="noopener noreferrer"
				>
					Donate $5
				</a>
			</header>
		</div>
	)
}

export default CheckOutForm