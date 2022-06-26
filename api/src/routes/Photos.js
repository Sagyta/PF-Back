const { Router } = require('express');
const { postPhoto, getPhoto, getPhotoId, putPhoto, deletePhoto } = require('./controllers/Photos');

const router = Router();

router.get('/', getPhoto)
router.get('/:id', getPhotoId)
router.post('/:albumId', postPhoto)
router.put('/:id', putPhoto)
router.delete('/:id', deletePhoto) 
module.exports = router;