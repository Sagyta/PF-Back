const {Sport} = require('../../db')

async function putSport (req,res){
    let {nameQ} = req.body

    const data = await Sport.update({name: nameQ}, {
        where: {
            name: 'futbol'
        }
    })

    const info = await Sport.findAll({where: {id: 1}, attributes: ['name']})
    
    console.log(info);
    res.send('Cambios Realizado con exito')

}

module.exports = putSport;  