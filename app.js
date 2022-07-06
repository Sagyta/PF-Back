require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const index = require('./index.js');
const server = express();


const PORT = process.env.PORT || 3001

server.use(express.json());
server.use(morgan('dev'));
server.use(express.urlencoded({extended: false}));
server.use(cookieParser());

server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
  });


server.use('/', index);



server.listen(PORT, ()=>{
	console.log('escuchando en puerto 3001');

})
