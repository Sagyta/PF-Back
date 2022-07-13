const {Review, User, Inscription, CategorySport, Category, Sport} = require('../../db')

async function getReview (req,res,next){
    try {
        const review = await Review.findAll({
            include: [
                {
                    model: Inscription,
                    attributes: ['id'],                   
                },
                {
                    model: User,
                    attributes: ['name']
                },
            ],
            attributes:{exclude: ['userId','inscriptionId']}
        })
        res.send(review)
    } catch (error) {
        next(error)
    }
}

async function getReviewId(req,res,next){
    const {id} = req.params
    try {
        const reviewId = await Review.findByPk(id,
            {include:[
                {
                    model: Inscription,

                    include:[{
                        model: CategorySport,
                        attributes: ['id'],
                        include:[
                            {
                                model: Category,
                                attributes: ['name']
                            },
                            {
                                model: Sport,
                                attributes:['name']
                            },
                        ],
                    }],
                    attributes: {exclude:['CategorySportId', 'userId']}                    
                },
                {
                    model: User,
                    attributes: ['name']
                },
            ],
            attributes: {exclude: ['inscriptionId','userId']}
            })
        res.send(reviewId)
    } catch (error) {
        next(error)
    }
}

async function postReview(req,res,next){
    const {message, rating} = req.body
    const {userId, inscriptionId} = req.params
    try {
        const exist = await Review.findAll({
            where:{
                userId: userId,
            inscriptionId: inscriptionId
            }
        })
        if(exist.length) return res.status(400)
        .send('Rechazado, ya has dejado tu reseña en este deporte');

        if(!message || !rating){Review
            res.status(404).send('Debes completar el mensaje y colocar una puntuación')
        }else{
    const createdIn = await Inscription.findByPk(inscriptionId);
    const createdBy = await User.findByPk(userId);
             let newReview = await Review.create({
                message,
                rating
            })
            createdBy.addReview(newReview);
            createdIn.addReview(newReview);
            res.send('Se ha guardado tu reseña')
            return newReview
        }
    } catch (error) {
        next(error)
    }
}
async function deleteReview(req,res,next){
    const {id} = req.params
    try {
        const delReview = await Review.findByPk(id)
        if(delReview){
            await delReview.destroy()
            return res.send('Review eliminado con éxito')
        }
        res.status(404).send('Review no encontrado')
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getReview,
    getReviewId,
    postReview,
    deleteReview,
}