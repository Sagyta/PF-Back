const { Contact } = require("../db");
var express = require("express");
var router = express.Router();

router.delete('/:id', async(req,res,next)=>{
    try{
        const { id }= req.params
        const delContact = await Contact.findByPk(id)
        if(delContact){
            await delContact.destroy();
            return res.send("Contacto eliminado exitosamente")
        }
        res.status(404).send('Contacto no encontrado')
    }catch(error){
        next(error)
    }
})

module.exports = router;