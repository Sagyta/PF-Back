const {Sport} = require('../../db')

async function getSport (req,res) {

    const data = await Sport.findAll({attributes: ['name']})
    console.log(data);
    console.log(data.length)
    if(data.length === 0){
        return res.send({msg: 'No hay ningun deporte en la base de datos'});
    }else {
        res.send(data)
    }


}

module.exports = getSport;