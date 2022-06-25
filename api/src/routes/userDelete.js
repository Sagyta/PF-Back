const { User } = require("../db");
var express = require("express");
var router = express.Router();

router.delete('/:id',async(req,res,next)=>{
    try{
    let regexUuid = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;

    let {id} = req.params;
    if(!regexUuid.test(id)){
        return res.send({msg: 'Lo siento, escribe un id valido'})
    }else {

    const usuario = await User.findOne({where: {id:id}});
    if(usuario === null){
        return res.send({msg: 'Lo siento, no existe ese usuario en la base de datos'})
    }else {
        await usuario.destroy();
        return res.send({msg:'Usuario Eliminado exitosamente'});
    }
 }
 }catch(error){
     next(error);
 }
})

module.exports = router;