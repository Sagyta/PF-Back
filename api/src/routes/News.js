const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getNews, postNews, getNewsId, putNews, deleteNews} = require('./controllers/News')

const router = Router();

router.get('/', getNews)
router.get('/:id', getNewsId)
router.post('/crear', postNews)
router.put('/:id', putNews)
router.delete('/:id', deleteNews)
module.exports = router;