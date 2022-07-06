const {Router} = require('express');
const app = Router();
const fetch = require('node-fetch');
const axios = require('axios');

const {ACCESS_TOKEN} = process.env;

app.get('/', (req,res)=>{
    res.send('hola que tal')
});

module.exports = app; 