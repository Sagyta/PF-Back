const {Sport} = require('../../db')

async function putSport (req,res){
    let {name, change} = req.body
    
    try {
     if(!name){
        return res.send({msg: 'Falta escribir el valor que va a ser modificado'})
    }
    const data = await Sport.findOne({where: {name : name}});
    
     if(data === null){
        return res.send({msg: `No puede cambiar ${name} porque no existe en la base de datos`})
    }else if(!change){
        return res.send({msg: 'Por favor escribe un valor para poder modificarlo por el existente'})
    }else if(name === change){
        return res.send({msg: 'No se puede modificar valores que son iguales'})
    }else {
        await data.update({name: change}).then(e=> res.send({msg: 'Cambio Realizado con exito'}))
    }
} catch (error) {
    res.send(error)       
}

}

module.exports = putSport;  