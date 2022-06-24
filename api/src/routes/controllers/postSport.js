const {Sport} = require('../../db');

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
module.exports = postSport;