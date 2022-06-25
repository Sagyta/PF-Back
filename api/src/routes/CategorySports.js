const { Router } = require('express');
const { postCategorySport, getCategorySport, getCategorySportId, deleteCategorySport } = require('./controllers/CategorySports');

const router = Router();

router.get('/', getCategorySport)
router.get('/:id', getCategorySportId)
router.post('/', postCategorySport)
/* router.put('/:id', putCategory)*/
router.delete('/:id', deleteCategorySport) 
module.exports = router;