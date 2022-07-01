const {Role} = require('../../db')

async function getRole (req,res) {
    
    const data = await Role.findAll({attributes: ['id','name']});
    console.log(data.length)
    console.log(data);
    if(data.length === 0){
        return res.send({msg: 'Lo siento no hay ningun Rol en nuestra base de datos'})
    }
    res.send(data);
};

async function postRole (req,res) {
    let {name} = req.body;

    if(!name){
        return res.send({msg: 'Por favor escriba un rol'})
    }else{
        const info = await Role.findOne({where : {name: name}})
      
        if(info === null){
            const data = await Role.create({name});
            return res.send(data);
        }else if(info !== null){
            return res.send({msg: 'Este rol ha sido creado anteriormente'})
        }
    } 
};
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
async function deleteRole (req,res) {
    let {name} = req.body;
    if(!name){
        return res.send({msg: 'Por favor elige un rol para que sea eliminado'})
    } else {
        const data = await Role.findOne({where: {name: name}});
        if(data === null){
            return res.send({msg: `No se puede eliminar ${name} porque no esta en la base de datos`})
        }else if(data !== null){
            await data.destroy();
            res.send({msg: 'Rol eliminado exitosamente'});
        }

    }

};
module.exports = {
    getRole,
    postRole,
    putRole,
    deleteRole,
};