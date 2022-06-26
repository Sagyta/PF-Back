const { Router } = require('express');
const { getAlbum, postAlbum, getAlbumId } = require('./controllers/Albums');

const router = Router();

router.get('/', getAlbum)
router.get('/:id', getAlbumId)
router.post('/', postAlbum)
/*router.put('/:id', putCategory)
router.delete('/:id', deleteCategory) */
module.exports = router;