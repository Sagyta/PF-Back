const { Router } = require('express');
const { postPhoto, getPhoto } = require('./controllers/Photos');

const router = Router();

router.get('/', getPhoto)
/* router.get('/:id', getCategoryId)*/
router.post('/:albumId', postPhoto)
/*router.put('/:id', putCategory)
router.delete('/:id', deleteCategory) */
module.exports = router;