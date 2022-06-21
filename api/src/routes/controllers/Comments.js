const {Comment} = require('../../db')


async function getComment (req,res,next){
    try {
        const commentFind = await Comment.findAll({
            attributes:[
                'id',
                'comment'
            ]
        })
        res.send(commentFind)

    } catch (error) {
        next(error)
    }
}

async function getCommentId(req,res,next){
    const {id} = req.params
    try {
        const commentsId = await Comment.findByPk(id)       
        res.send(commentsId)
    } catch (error) {
        next(error)
    }
}

async function postComment(req,res,next){
    const {
        comment
    } = req.body
    try {
        if(!comment){
            res.status(404).send('Por favor ingrese un comentario')
        }else{
             let insertComment = await Comment.create({
                comment
            })
            res.send('Comentario creado')
            return insertComment
        }
    } catch (error) {
        next(error)
    }
}

async function putComment(req,res,next){
    const {id}= req.params
    const {
        comment
    } = req.body
    try {
        let updateComment = await Comment.findOne({
            where:{
                id:id,
            }
        })
        await updateComment.update({
            comment
        })
        res.send(updateComment)
    } catch (error) {
        next(error)
    }
}

async function deleteComment(req,res,next){
    const {id} = req.params
    try {
        const commentDelete = await Comment.findByPk(id)
        if(commentDelete){
            await commentDelete.destroy()
            return res.send('Comentario eliminado')
        }
        res.status(404).send('Comentario no encontrado')
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getComment,
    postComment,
    getCommentId,
    putComment,
    deleteComment,
}