const {Contact} = require('../../db')
const emailer = require('../../emailer')

async function getContact (req,res,next){
    try{
        let contactDB = await Contact.findAll();
        let aux= contactDB.map(u=>{
            return{
                id: u.id,
                email: u.email,
                name: u.name,
                surname: u.surname,
                phone: u.phone,
                message: u.message                
            }
        })
        const { email }= req.query;
        let totalMessages = await aux;
        if(email){
            let userEmail = await totalMessages.filter(el=> el.email.toLowerCase().includes(email.toLowerCase()))
            userEmail.length ?
            res.status(200).send(userEmail):
            res.status(400).send("Email no encontrado")
        }else{
            res.status(200).send(totalMessages)
        }
    }catch(error){
        next(error)
    }
}
async function postContact (req,res,next){
    let { email,name,surname,phone,message }= req.body
    if(!email ){
        return res.json({error: "El email es necesario para poder ponernos en contacto"})
    }    
    try{
        let newContact = await Contact.create({
            email,
            name,
            surname,
            phone,
            message
        })
        emailer.sendMail(newContact)
        return res.send(newContact)
    }catch(error){
        next(error)
    }
}
async function deleteContact (req,res,next){
    try{
        const { id }= req.params
        const delContact = await Contact.findByPk(id)
        if(delContact){
            await delContact.destroy();
            return res.send("Contacto eliminado exitosamente")
        }
        res.status(404).send('Contacto no encontrado')
    }catch(error){
        next(error)
    }
}

module.exports = {
    getContact,
    postContact,
    deleteContact,
}