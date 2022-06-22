const {Role} = require('../../db')

async function postRole (req,res) {
    let {name} = req.body;

    if(!name){
        return res.send({msg: 'Por favor escriba un rol'})
    }else{
        const info = await Role.findOne({where : {name: name}})
        console.log(info);
        if(info === null){
            const data = await Role.create({name});
            return res.send(data);
        }else if(info !== null){
            return res.send({msg: 'Este rol ha sido creado anteriormente'})
        }
} 

   
   
    
};

module.exports = postRole;