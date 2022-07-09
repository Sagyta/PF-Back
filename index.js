const {Router} = require('express');
const app = Router();
const fetch = require('node-fetch');
const axios = require('axios');

const {ACCESS_TOKEN} = process.env;

app.post('/payment', async(req,res)=>{
   
    let {payer_email, items} = req.body;
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
        payer_email,
        items,
        back_urls: {
            success: "https://club-henry.vercel.app/home",
            failure: "https://club-henry.vercel.app/home",
            pending: "https://club-henry.vercel.app/home",
        },
    };

    const payment = await axios.post(url, body, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    });
    res.send({url : payment.data.init_point});
    
});

app.post('/check', async(req,res)=>{
    let {id, topic} = req.query;
    
    if(req.body.topic === 'merchant_order' && topic !== 'payment'){
        let url = 'https://api.mercadolibre.com/merchant_orders';
        const results = await fetch(`${url}/${id}?access_token=${ACCESS_TOKEN}`).then(e=> e.json());
        if(results.order_status === 'paid'){
            let backurl = 'https://backhenryclub.herokuapp.com/pay';
            const data = await axios.post(backurl, results);
            return res.send({msg: 'Pago enviado'});
        }
        return res.send({msg: 'listo'});
    }else {
        return res.send({msg: 'error'});
    }

});



module.exports = app; 