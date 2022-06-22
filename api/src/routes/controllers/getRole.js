const {Role} = require('../../db')

async function getRole (req,res) {
    
    const data = await Role.findAll({attributes: ['name']});
    console.log(data.length)
    console.log(data);
    if(data.length === 0){
        return res.send({msg: 'Lo siento no hay ningun Rol en nuestra base de datos'})
    }
    res.send(data);

};

module.exports = getRole;