const {New, Comment, User, Sport} = require('../../db')


async function getNews (req,res,next){
    try {
        const newsFind = await New.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name', 'surname']
                },
                {
                    model: Sport,
                    attributes: ['name']
                },
            ],
            attributes:['id','title', 'subtitle']
        })
        res.send(newsFind)
    } catch (error) {
        next(error)
    }
}

async function getNewsId(req,res,next){
    const {id} = req.params
    try {
        const newsId = await New.findByPk(id,{
            include:[
                {
                model: User,
                attributes: ['name', 'surname']
                },
                {
                    model: Sport,
                    attributes: ['name']
                },
                {
                model: Comment,
                attributes: ['comment']
                },
            ],
            attributes: {exclude: ['sportId', 'userId']}
        })
        res.send(newsId)
    } catch (error) {
        next(error)
    }
}

async function postNews(req,res,next){
    try {
        const {userId} = req.params
        const createBy = await User.findByPk(userId)

        const {
            title,
            subtitle,
            text,
            image,
            sportId,
        } = req.body

        const exist = await New.findAll({
            where:{
                title
            }
        })
        if(exist.length) return res.status(400)
        .send('Rechazado, esa noticia ya existe en la base de datos')

        const insertNews = await New.create({
            title,
            subtitle,
            text,
            sportId,
        }) 
             
        createBy.addNew(insertNews)
        res.send(insertNews)
    } catch (error) {
        next(error)
    }
}

async function putNews(req,res,next){
    const {id}= req.params
    const {
        title,
        subtitle,
        text,
        image
    } = req.body
    try {
        let updateNews = await New.findOne({
            where:{
                id:id,
            }
        })
        await updateNews.update({
            title,
            subtitle,
            text,
            image,
        })
        res.send(updateNews)
    } catch (error) {
        next(error)
    }
}

async function deleteNews(req,res,next){
    const {id} = req.params
    try {
        const newsDelete = await New.findByPk(id)
        if(newsDelete){
            await newsDelete.destroy()
            return res.send('Noticia eliminada')
        }
        res.status(404).send('noticia no encontrada')
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getNews,
    postNews,
    getNewsId,
    putNews,
    deleteNews,
}