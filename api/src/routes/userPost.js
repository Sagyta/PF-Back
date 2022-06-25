const { User } = require("../db");
var express = require("express");
var router = express.Router();

router.post("/", async(req,res,next)=>{
    let { name, surname, address, phone, email, username, password, dni, isOlder, tutorName, tutorPhone, tutorEmail, roleId }= req.body
    if(!name || !surname || !address || !phone || !email || !username || !password || !dni){
       if(isOlder !==true || isOlder !==false)
        return res.json({error: "Faltan datos necesarios"})
    }
    if(!roleId){
        roleId = 1
    }
    if(await User.findOne({ where: {dni: dni}})) return res.json({error: "DNI ya existente en nuestra base de datos"})
    if(await User.findOne({ where: {username: username}})) return res.json({error: "Usuario ya existente en nuestra base de datos"})
    if(await User.findOne({ where: {email: email}})) return res.json({error: "Email ya existente"})
    try{
        let newUser = await User.create({
            name,
            surname,
            address,
            phone,
            email,
            username,
            password,
            dni,
            isOlder,
            tutorName,
            tutorPhone,
            tutorEmail,
            roleId
        })
        return res.send({msg: 'Usuario creado exitosamente'})
    }catch(error){
        next(error)
    }
})

module.exports = router;