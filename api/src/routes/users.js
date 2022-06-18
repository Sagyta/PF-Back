const { User } = require("../db");
var express = require("express");
var router = express.Router();

router.delete("/user/:id", async(req,res)=>{
    try{
        const { id }= req.params
        const delUser = await User.findByPk(id);
        if(delUser){
            await delUser.destroy();
            return res.send("Usuario eliminado")
        }
        res.status(404).send("Usuario no encontrado")
    }catch(error){
        res.status(400).send(error)
    }
})