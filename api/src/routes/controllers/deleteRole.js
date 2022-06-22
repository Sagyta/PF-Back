const {Role} = require('../../db');

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

module.exports = deleteRole;