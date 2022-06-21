const { User } = require("../db");
var express = require("express");
var router = express.Router();

router.get('/', async(req,res,next)=>{
    try{
        let userDB = await User.findAll();
        let aux=userDB.map(u=>{
            return{
                id: u.id,
                name: u.name,
                surname: u.surname,
                address: u.address,
                phone: u.phone,
                email: u.email,
                username: u.username,
                password: u.password,
                dni: u.dni,
                memebershipNumber: u.memebershipNumber,
                tutorName: u.tutorName,
                tutorPhone: u.tutorPhone,
                tutorEmail: u.tutorEmail,

            }
        })
        //return aux
        const { name }= req.query;
        let totalUsers = await aux;
        if(name){
            let userName = await totalUsers.filter(el=> el.name.toLowerCase().includes(name.toLowerCase()))
            userName.length ?
            res.status(200).send(userName):
            res.status(400).send("Socio no encontrado")
        }else{
            res.status(200).send(totalUsers)
        }
    }catch(error){
        next(error)
    }
})

router.get('/:id', async(req,res,next)=>{
    try{
        const {id}=req.params
        let totalUsers = await User.findAll()
        if(id){
            let userId = await totalUsers.filter(el=>el.id==id)

            userId.length ?
            res.status(200).json(userId):
            res.status(400).send('Usuario no encontrado')
        }
    }catch(error){
        next(error)
    }
})
module.exports = router;