const {Sport} = require('../../db')

async function getSport (req,res) {
    const data = await Sport.findAll({attributes: ['id','name']})
    if(data.length === 0){
        return res.send({msg: 'No hay ningun deporte en la base de datos'});
    }else {
        res.send(data)
    }
}

async function postSport (req,res){
    let {name} = req.body    
    const data = await Sport.findOne({where: {name: name}}); 
        if(data !== null){
            return res.send({msg: 'Ese deporte ha sido agregado anteriormente'})
        }else{       
            const info = await Sport.create({name});
            res.send({msg:'Añadido correctamente'});
        }
} 
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

async function deleteSport (req,res) {
    let {name} = req.body; 
    let data = await Sport.findOne({where: {name: name}});
        if(data === null){
            data = {msg: 'Lo siento no hay ese deporte en la base de datos'}
        }else {
            await data.destroy();
        }
        res.send(data);
}

module.exports ={
    getSport,
    postSport,
    putSport,
    deleteSport,
};