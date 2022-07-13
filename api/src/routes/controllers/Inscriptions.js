const {Inscription, Sport, Category, User, CategorySport} = require('../../db')
//const  /* emailerInscripciones */{ sendMailInscripcion }  = require('../../Emailers/emailerInscripciones')

async function getInscription (req,res,next){
    try {
        const getInscr = await Inscription.findAll({
            include: [
                {
                model: User,
                attributes: ['id','name','surname']
                },
                {
                model: CategorySport,
                attributes: ['day','start','finish', 'fee'], 
                include:[
                    {
                        model: Sport,
                        attributes: ['name']
                    },
                    {
                        model:Category,
                        attributes: ['name']
                    },
                    {
                        model: User,
                        attributes: ['name', 'surname']
                    }
                ]
                },
            ],
            attributes: {exclude: ['userId', 'CategorySportId', 'sportId', 'categoryId']}

        })
            console.log(getInscr)
        res.send(getInscr)
    } catch (error) {
       next(error) 
    }
}

 async function getInscriptionId(req,res,next){
    try {
        const {id} = req.params
        const inscriptionId = await Inscription.findByPk(id,{
            include: [
                {
                model: User,
                attributes: ['id','name','surname']
                },
                {
                model: CategorySport,
                attributes: ['day','start','finish', 'fee'], 
                include:[
                    {
                        model: Sport,
                        attributes: ['name']
                    },
                    {
                        model:Category,
                        attributes: ['name']
                    },
                    {
                        model: User,
                        attributes: ['name', 'surname','roleId']
                    },
                ]
                },
            ],
            attributes: {exclude: ['userId', 'CategorySportId', 'sportId', 'categoryId']}
        })
        res.send(inscriptionId)
    } catch (error) {
      next(error)  
    }
} 

async function postInscription(req,res,next){
    try {
        const {CategorySportId} = req.body
        const {userId} = req.params
        const userInscripto= await User.findByPk(userId);
        console.log(userInscripto);

            let insertInscription= await Inscription.create({
                CategorySportId
            })            
        //   await userInscripto.addInscription(insertInscription)
            /* emailerInscripciones.sendMailInscripcion(insertInscription) */
           /*  await sendMailInscripcion(userInscripto.email, 'Hola') */
            res.send('La inscripcion se ha realizado correctamente')
    } catch (error) {
      next(error)  
    }
}

 async function putInscription(req,res,next){
    try {
        const { id }= req.params
        const {CategorySportId} = req.body
        let updateInscription = await Inscription.findByPk(id)
        await updateInscription.update({
            CategorySportId,
        })
        res.status(200).send(updateInscription)
    } catch (error) {
      next(error)  
    }
} 

/* async function deleteInscription(req,res,next){
    try {
        
    } catch (error) {
      next(error)  
    }
} */

module.exports = {
    getInscription,
    getInscriptionId, 
    postInscription,
    putInscription, 
    /* deleteInscription, */
}