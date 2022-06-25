const { User, Role } = require("../db");
var express = require("express");
var router = express.Router();

router.get('/', async(req,res,next)=>{

    try{

    const data = await User.findAll({include: {
        model: Role,
        attributes: ['name']
    }});
   
    let users = [...data];
  
    let maps = users.map(e=> {

    if(e.isOlder === true){
        return {
        id: e.id, 
        name:e.name, 
        surname: e.surname, 
        address:e.address,
        phone:e.phone,
        email:e.email,
        username:e.username,
        membershipNumber:e.membershipNumber,
        dni:e.dni,
        role: e.role !== null ? e.role.name : 'no tiene rol',
        isOlder: e.isOlder
        }
    }else {
        return {
            id: e.id, 
            name:e.name, 
            surname: e.surname, 
            address:e.address,
            phone:e.phone,
            email:e.email,
            username:e.username,
            membershipNumber:e.membershipNumber,
            dni:e.dni,
            role: e.role !== null ? e.role.name : 'no tiene rol',
            isOlder: e.isOlder,
            tutorName: e.tutorName,
            tutorPhone: e.tutorPhone,
            tutorEmail: e.tutorEmail
            }
    }

    });
  

    res.send(maps);
}catch(error){
    next(error);
}
})

router.get('/:id', async(req,res,next)=>{
    let regexUuid = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
    let {id} = req.params;
    if(!regexUuid.test(id)){
        return res.send({msg:'Lo siento escriba un id valido'});
    }else{

    const usuario = await User.findOne({where: {id: id}});
    if(usuario === null){
        return res.send({msg: 'Lo siendo pero no hay ningun usuario con ese id'})
    }else{
        console.log(usuario);
        res.send(usuario)
        }
    }

});
module.exports = router;