const {Inscription, Sport, Category, User, CategorySport, Teacher} = require('../../db')


async function getInscription (req,res,next){
    try {
        const getInscr = await Inscription.findAll({
            include: [
                {
                model: User,
                attributes: ['name','surname']
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
                        model: Teacher,
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

/* async function getInscriptionId(req,res,next){
    try {
        
    } catch (error) {
      next(error)  
    }
} */

async function postInscription(req,res,next){
    try {
        const {CategorySportId} = req.body
        const {userId} = req.params
        const userInscripto= await User.findByPk(userId)
            let insertInscription= await Inscription.create({
                CategorySportId
            })            
            userInscripto.addInscription(insertInscription)
            res.send('La inscripcion se ha realizado correctamente')
    } catch (error) {
      next(error)  
    }
}

/* async function putInscription(req,res,next){
    try {
        
    } catch (error) {
      next(error)  
    }
} */

/* async function deleteInscription(req,res,next){
    try {
        
    } catch (error) {
      next(error)  
    }
} */

module.exports = {
    getInscription,
   /*  getInscriptionId, */
    postInscription,
    /* putInscription, */
    /* deleteInscription, */
}