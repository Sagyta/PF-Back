const { Router } = require('express');
const { getInscription, postInscription } =require('./controllers/Inscriptions')

const router = Router();

router.get('/', getInscription)
/* router.get('/:id', getCommentId) */
router.post('/:userId/', postInscription)
/* router.put('/:id', putComment)
router.delete('/:id', deleteComment) */
module.exports = router;
/* :CategorySportId */