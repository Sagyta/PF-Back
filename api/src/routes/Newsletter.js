const { Router } = require('express');
const {getSuscription, postSuscription, putSuscription, getBajaSuscription} = require('./controllers/Newsletter')

const router = Router();

router.get('/', getSuscription)
router.post('/', postSuscription)
router.put('/:id', putSuscription)
router.get('/confirm/:token', getBajaSuscription)
module.exports = router;