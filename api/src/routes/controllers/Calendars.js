const {Calendar, Sport} = require('../../db.js');

async function getCalendar(req,res,next){
    try{
        const datos = await Calendar.findAll({include:{
            model: Sport,
            attributes: ['name']
        }});
        let inf = datos.map(e => {
            return {
                id: e.id,
                title: e.title,
                name: e.sport.name,
                startTime: e.startTime,
                endTime: e.endTime,
                startRecur: e.startRecur,
                endRecur: e.endRecur,
                daysOfWeek: e.daysOfWeek
            }})
        return res.send(inf); 
    }catch(error){
        next(error)
    }
}

async function getIdCalendar(req,res,next){
    try{
    let regexUuid = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
    let {id} = req.params;    
    if(regexUuid.test(id)){
        const e = await Calendar.findOne({where:{id:id}, include: {
            model: Sport,
            attributes: ['name']
        }});
            if(e === null){
                return res.send({msg: 'No existe calendario con ese id'});
            }else {
                let inf =  {
                    id: e.id,
                    title: e.title,
                    name: e.sport.name,
                    startTime: e.startTime,
                    endTime: e.endTime,
                    startRecur: e.startRecur,
                    endRecur: e.endRecur,
                    daysOfWeek: e.daysOfWeek
                    }
                res.send(inf);      
            }
        }else {
            return res.send({msg:'Lo siento, escriba un id valido'})
        }
    }catch(error){
        next(error)
    }
}

async function postCalendar(req,res,next){
    let {title,startTime,endTime,startRecur,endRecur,daysOfWeek,sportId} = req.body; 
     try{ 
        if(!title, !startTime || !endTime || !startRecur || !endRecur || !daysOfWeek || !sportId){
            return res.send({msg: 'Lo siento faltan datos que completar'})
        }else {                
            const datos = await Calendar.create({
                title,
                startTime,
                endTime,
                startRecur,
                endRecur,
                daysOfWeek,
                sportId
            }); 
            console.log(datos); 
            return res.send({msg: 'Datos enviados exitosamente'});
        }
    }catch(error){
        next(error)
    } 
 }

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

module.exports = {
    getCalendar,
    getIdCalendar,
    postCalendar,
    putCalendar,
    deleteCalendar,
}