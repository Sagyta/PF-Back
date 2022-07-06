const {Router} = require('express');
const app = Router();
const fetch = require('node-fetch');
const axios = require('axios');

const {ACCESS_TOKEN} = process.env;

app.post('/payment', (req,res)=>{
   
    let {payer_email, items} = req.body;
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
        payer_email,
        items,
        back_urls: {
            success: "https://prueba-mercado.vercel.app//success",
            failure: "/failure",
            pending: "/pending",
        },
    };

    const payment = await axios.post(url, body, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    });
    res.send(payment.data);
    
});

module.exports = app; 