const { Router } = require('express');
const { postCategorySport, getCategorySport } = require('./controllers/CategorySports');

const router = Router();

router.get('/', getCategorySport)
/*router.get('/:id', getCategoryId) */
router.post('/', postCategorySport)
/* router.put('/:id', putCategory)
router.delete('/:id', deleteCategory) */
module.exports = router;