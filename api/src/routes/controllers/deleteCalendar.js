const {Calendar} = require('../../db.js');
async function deleteCalendar(req,res){
   
    try{
        let regexUuid = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
    
        let {id} = req.params;
        if(!regexUuid.test(id)){
            return res.send({msg: 'Lo siento, escribe un id valido'})
        }else {
    
        const usuario = await Calendar.findOne({where: {id:id}});
        if(usuario === null){
            return res.send({msg: 'Lo siento, no existe ese calendario en la base de datos'})
        }else {
            await usuario.destroy();
            return res.send({msg:'Usuario Eliminado exitosamente'});
        }
     }
     }catch(error){
         next(error);
     }

}

module.exports = deleteCalendar;