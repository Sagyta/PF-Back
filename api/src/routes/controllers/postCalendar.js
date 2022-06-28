const {Calendar} = require('../../db.js');
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

module.exports = postCalendar;