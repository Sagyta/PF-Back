const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getCategory, postCategory, getCategoryId, putCategory, deleteCategory} = require('./controllers/Category')

const router = Router();

router.get('/', getCategory)
router.get('/:id', getCategoryId)
router.post('/', postCategory)
router.put('/:id', putCategory)
router.delete('/:id', deleteCategory)
module.exports = router;