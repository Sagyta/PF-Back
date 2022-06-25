const { User } = require("../db");
var express = require("express");
var router = express.Router();

router.put("/:id", async(req,res,next)=>{
    try {
    let regexUuid = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
   let {id} = req.params;
   if(!regexUuid.test(id)){
       return res.send({msg: 'ingrese un ID valido'});
   }else{
   const data = await User.findOne({where: {id:id}});
   if(data === null){
       return res.send({msg: 'Lo siento pero no se encuentra ese usuario'});
   }else {
  
       data.set(req.body);
       await data.save();
       res.send(data);
   }
 }
}catch(error){
    next(error)
}
});

module.exports = router;