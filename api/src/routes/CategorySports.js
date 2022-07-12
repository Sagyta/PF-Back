const { Router } = require('express');
const { postCategorySport, getCategorySport, getCategorySportId, deleteCategorySport, putCategorySport, getCategorySportAdmin } = require('./controllers/CategorySports');

const router = Router();

router.get('/', getCategorySport)
router.get('/catAdmin', getCategorySportAdmin)
router.get('/:id', getCategorySportId)
router.post('/', postCategorySport)
router.put('/:id', putCategorySport)
router.delete('/:id', deleteCategorySport) 
module.exports = router;