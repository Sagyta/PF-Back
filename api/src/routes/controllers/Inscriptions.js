const {Inscription} = require('../../db')


async function getInscription (req,res,next){
    try {
        const getInscr = await Inscription.findAll()
        res.send(getInscr)
    } catch (error) {
       next(error) 
    }
}

async function getInscriptionId(req,res,next){
    try {
        
    } catch (error) {
      next(error)  
    }
}

async function postInscription(req,res,next){
    try {
        const {starDate, scheduleIn, userId } = req.body
            let insertInscription= await Inscription.create({
                starDate,
                scheduleIn,
            })
            res.send('Te has registrado correctamente')
    } catch (error) {
      next(error)  
    }
}

async function putInscription(req,res,next){
    try {
        
    } catch (error) {
      next(error)  
    }
}

async function deleteInscription(req,res,next){
    try {
        
    } catch (error) {
      next(error)  
    }
}

module.exports = {
    getInscription,
    getInscriptionId,
    postInscription,
    putInscription,
    deleteInscription,
}