const { Router } = require('express');
const { getAlbum, postAlbum } = require('./controllers/Albums');

const router = Router();

router.get('/', getAlbum)
/* router.get('/:id', getCategoryId)*/
router.post('/', postAlbum)
/*router.put('/:id', putCategory)
router.delete('/:id', deleteCategory) */
module.exports = router;