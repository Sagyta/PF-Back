const { Router } = require('express');
const { getInscription, postInscription, getInscriptionId, putInscription } =require('./controllers/Inscriptions')

const router = Router();

router.get('/', getInscription)
router.get('/:id', getInscriptionId) 
router.post('/:userId/', postInscription)
router.put('/:id', putInscription)
/*router.delete('/:id', deleteComment) */
module.exports = router;
