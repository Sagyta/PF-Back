const { Router } = require('express');
const { postCategorySport, getCategorySport, getCategorySportId } = require('./controllers/CategorySports');

const router = Router();

router.get('/', getCategorySport)
router.get('/:id', getCategorySportId)
router.post('/', postCategorySport)
/* router.put('/:id', putCategory)
router.delete('/:id', deleteCategory) */
module.exports = router;