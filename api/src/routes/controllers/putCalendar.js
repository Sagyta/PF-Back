const {Calendar} = require('../../db.js');
async function putCalendar(req,res,next){
    
    try {
        let regexUuid = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
       let {id} = req.params;
       if(!regexUuid.test(id)){
           return res.send({msg: 'ingrese un ID valido'});
       }else{
       const data = await Calendar.findOne({where: {id:id}});
       if(data === null){
           return res.send({msg: 'Lo siento pero no se encuentra ese calendario'});
       }else {
      
           data.set(req.body);
           await data.save();
           res.send({msg: 'Cambios realizados exitosamente'});
       }
     }
    }catch(error){
        next(error)
    }

}

module.exports = putCalendar;