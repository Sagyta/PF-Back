const { Contact } = require("../db");
var express = require("express");
var router = express.Router();

router.get('/', async(req,res,next)=>{
    try{
        let contactDB = await Contact.findAll();
        let aux= contactDB.map(u=>{
            return{
                id: u.id,
                email: u.email,
                name: u.name,
                surname: u.surname,
                phone: u.phone,
                message: u.message                
            }
        })
        const { email }= req.query;
        let totalMessages = await aux;
        if(email){
            let userEmail = await totalMessages.filter(el=> el.email.toLowerCase().includes(email.toLowerCase()))
            userEmail.length ?
            res.status(200).send(userEmail):
            res.status(400).send("Email no encontrado")
        }else{
            res.status(200).send(totalMessages)
        }
    }catch(error){
        next(error)
    }
})

module.exports = router;