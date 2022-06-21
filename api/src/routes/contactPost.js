const { Contact } = require("../db");
var express = require("express");
var router = express.Router();

router.post("/", async(req,res,next)=>{
    let { email,name,surname,phone,message }= req.body
    if(!email ){
        return res.json({error: "El email es necesario para poder ponernos en contacto"})
    }
    
    try{
        let newContact = await Contact.create({
            email,
            name,
            surname,
            phone,
            message
        })
        return res.send(newContact)
    }catch(error){
        next(error)
    }
})

module.exports = router;