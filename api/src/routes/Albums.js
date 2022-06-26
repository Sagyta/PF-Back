const { Router } = require('express');
const { getAlbum, postAlbum, getAlbumId, putAlbum, deleteAlbum } = require('./controllers/Albums');

const router = Router();

router.get('/', getAlbum)
router.get('/:id', getAlbumId)
router.post('/', postAlbum)
router.put('/:id', putAlbum)
router.delete('/:id', deleteAlbum) 
module.exports = router;