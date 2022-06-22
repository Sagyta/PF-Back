const {Role} = require('../../db')

async function putRole (req,res) {
    let {name, change} = req.body;

        try {
        if(!name){
            return res.send({msg: 'Por favor escribe el rol que va a ser modificado'});
        }
        const data = await Role.findOne({where: {name:name}})
        if(data === null){
            return res.send({msg:`Lo siento, no podemos modificar ${name} porque no esta en nuestra base de datos`})
        }else if(!change){
            return res.send({msg: 'Lo siento escriba el rol nuevo que quiera modificar'})
        }else if(name === change){
            return res.send({msg: 'No se puede modificar valores iguales'})
        } else {
            await data.update({name: change}).then(e=> res.send({msg: 'Cambio realizado con exito'}))
        }
    } catch (error) {
         res.send(error)   
}


};

module.exports = putRole;