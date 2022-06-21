const {Sport} = require('../../db')

async function deleteSport (req,res) {
    let {name} = req.body; 
    let data = await Sport.findOne({where: {name: name}});
    console.log(data)

    if(data === null){
        data = {msg: 'Lo siento no hay ese deporte en la base de datos'}
    }else {
        await data.destroy();
    }

    res.send(data);

}

module.exports = deleteSport;