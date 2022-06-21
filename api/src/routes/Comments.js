const { Router } = require('express');
const { getComment, getCommentId, postComment, putComment, deleteComment } =require('./controllers/Comments')

const router = Router();

router.get('/', getComment)
router.get('/:id', getCommentId)
router.post('/comentar', postComment)
router.put('/:id', putComment)
router.delete('/:id', deleteComment)
module.exports = router;