const {User, Role} = require('../../db')

async function getTeacher (req,res,next){
    try {
        const teacher = await User.findAll({
            where:{
                roleId: 3
            },
            include:[{
                model: Role,
                attributes: ['name']
            }],
            attributes: ['id','name', 'surname']
        })      
        if(teacher.length){
            res.send(teacher)
        }else{
            res.send('Este profesor no se encuentra en la base de datos')
        }
    } catch (error) {
        next(error)
    }
}
async function getTeacherId(req,res,next){
    const {id} = req.params
    try {
        const teacherId = await User.findByPk(id,
            {            
            include: [{
                    model: Role,
                    attributes: ['name']
            }],
             attributes: {exclude: ['roleId']} 
        })
        console.log(teacherId)
        if(teacherId){
            res.send(teacherId)
        }else{
            res.send('no existe usuarios con este rol')
        }
    } catch (error) {
        next(error)
    }
}
async function putTeacher(req,res,next){
    try{
        const {roleId} =req.body
        const {id} = req.params
        
        let findUser = await User.findByPk(id) 
        if(!findUser){
             res.send('no existe este usuario')
        }else{
                let updateRole= await findUser.update({
                    roleId,
                })
                res.send(updateRole)
            }              
    }catch(error){
        next(error)
    }
}
module.exports = {
    getTeacher,
    getTeacherId, 
    putTeacher,  
}