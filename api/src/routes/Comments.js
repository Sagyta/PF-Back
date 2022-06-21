const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getComment, getCommentId, postComment, putComment, deleteComment } =require('./controllers/Comments')

const router = Router();

router.get('/', getComment)
router.get('/:id', getCommentId)
router.post('/comentar', postComment)
router.put('/:id', putComment)
router.delete('/:id', deleteComment)
module.exports = router;