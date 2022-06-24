const {Teacher} = require('../../db')

async function getTeacher (req,res,next){
    try {
        const teacher = await Teacher.findAll()
        //res.send(teacher)
        const { name }= req.query;
        let totalTeachers = await teacher;
        if(name){
            let teacherName = await totalTeachers.filter(el=> el.name.toLowerCase().includes(name.toLowerCase()))
            teacherName.length ?
            res.status(200).send(teacherName):
            res.status(400).send("Profesor no encontrado")
        }else{
            res.status(200).send(totalTeachers)
        }
    } catch (error) {
        next(error)
    }
}

async function getTeacherId(req,res,next){
    const {id} = req.params
    try {
        const teacherId = await Teacher.findByPk(id)
        res.send(teacherId)
    } catch (error) {
        next(error)
    }
}

async function postTeacher(req,res,next){
    const {
        name, surname, dni, address, phone, email
    } = req.body
    try {
        if(!name || !surname || !dni || !address || ! phone || !email){
            res.status(404).send('Debe ingresar todos los datos necesarios')
        }else{
             let newTeacher = await Teacher.create({
                name,
                surname,
                dni,
                address,
                phone,
                email
            })
            res.send('Profesor Creado')
            return newTeacher
        }
    } catch (error) {
        next(error)
    }
}

async function putTeacher(req,res,next){
    try{
        const { id }= req.params
        let updateTeacher = await Teacher.findOne({where:{id:id}})
        await updateTeacher.update({
            name: req.body.name,
            surname: req.body.surname,
            dni: req.body.dni,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email
        })
        res.status(200).send(updateTeacher)
    }catch(error){
        next(error)
    }
}

async function deleteTeacher(req,res,next){
    const {id} = req.params
    try {
        const delTeacher = await Teacher.findByPk(id)
        if(delTeacher){
            await delTeacher.destroy()
            return res.send('Profesor eliminado con éxito')
        }
        res.status(404).send('Profesor no encontrado')
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getTeacher,
    getTeacherId,
    postTeacher,
    putTeacher,
    deleteTeacher,
}