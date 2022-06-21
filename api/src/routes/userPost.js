const { User } = require("../db");
var express = require("express");
var router = express.Router();

router.post("/", async(req,res,next)=>{
    let { name, surname, address, phone, email, username, password, dni, isOlder }= req.body
    if(!name || !surname || ! address || !phone || !email || !username || !password || !dni || !isOlder){
       return res.json({error: "Faltan datos necesarios"})
    }
    if(await User.findOne({ where: {dni: dni}})) return res.json({error: "DNI ya existente en nuestra base de datos"})
    if(await User.findOne({ where: {username: username}})) return res.json({error: "Usuario ya existente en nuestra base de datos"})
    try{
        let postUser = await User.create ({
            name,
            surname,
            address,
            phone,
            email,
            username,
            password,
            dni,
            isOlder
        })

    }catch(error){
        next(error)
    }
})