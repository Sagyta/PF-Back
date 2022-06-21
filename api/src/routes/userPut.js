const { User } = require("../db");
var express = require("express");
var router = express.Router();

router.put("/:id", async(req,res,next)=>{
    try{
        const { id }= req.params
        let updateUser = await User.findOne({
            where:{
                id:id
            }
        });
        await updateUser.update({
            name:req.body.name,
            surname:req.body.surname,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            dni: req.body.dni,
            isOlder: req.body.isOlder,
            username: req.body.username,
            password: req.body.password,
            tutorName: req.body.tutorName,
            tutorPhone: req.body.tutorPhone,
            tutorEmail: req.body.tutorEmail,
        })
        res.status(200).send(updateUser)
    }catch(error){
        next(error)
    }
})

module.exports = router;