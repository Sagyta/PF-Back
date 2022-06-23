const {New, Comment} = require('../../db')


async function getNews (req,res,next){
    try {
        const newsFind = await New.findAll()
        res.send(newsFind)

    } catch (error) {
        next(error)
    }
}

async function getNewsId(req,res,next){
    const {id} = req.params
    try {
        const newsId = await New.findByPk(id,{
            
        })

        console.log(newsId)
        res.send(newsId)
    } catch (error) {
        next(error)
    }
}

async function postNews(req,res,next){
    const {
        title,
        subtitle,
        text,
        image,
    } = req.body
    try {
           if(!title || !subtitle || !text){
               res.status(404).send('Faltan datos para poder crear noticia')
            }else{
                let insertNews = await New.create({
                    title,
                    subtitle,
                    text,
                    image,
                })                
                res.send('Noticia Creada')
                /* return insertNews */
        }
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