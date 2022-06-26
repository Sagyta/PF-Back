const {Calendar} = require('../../db.js');
async function postCalendar(req,res,next){
   let {horaInicio,horaFinalizacion,fechaInicio,fechaActualizacion,dias,calendarId} = req.body;

    try{

    if(!horaInicio || !horaFinalizacion || !fechaInicio || !fechaActualizacion || !dias || !calendarId){
        return res.send({msg: 'Lo siento faltan datos que completar'})
    }else {
            
        const datos = await Calendar.create({
            horaInicio,
            horaFinalizacion,
            fechaInicio,
            fechaActualizacion,
            dias,
            calendarId
        });

        console.log(datos);

        return res.send({msg: 'Datos enviados exitosamente'});
    }
}catch(error){
    next(error)
}

}

module.exports = postCalendar;