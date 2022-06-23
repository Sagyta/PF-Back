const {Comment, User,New} = require('../../db')


async function getComment (req,res,next){
    try {
        const commentFind = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name', 'surname']
                }
            ],
            attributes:[
                'id',
                'comment',
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
        console.log(commentsId)      
        res.send(commentsId)
    } catch (error) {
        next(error)
    }
}

async function postComment(req,res,next){
    const {comment} = req.body
    const {newId, userId} = req.params
    const obj = {};

  try {
    const createdInNew = await New.findByPk(newId);
    const createdBy = await User.findByPk(userId);

    const newComment = await Comment.create(req.body);
    createdBy.addComment(newComment);
    createdInNew.addComment(newComment);

    obj.id = newComment.dataValues.id;
    obj.comment = req.body.comment;
    obj.user = {
      name: createdBy.dataValues.name,
      id: createdBy.dataValues.id,
      surname: createdBy.dataValues.surname,
    };

    res.send(obj);
  } catch (error) {
    next(error);
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