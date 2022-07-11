const {Router} = require('express');
const {getReview, postReview, getReviewId, deleteReview} = require ('./controllers/Reviews')



const router = Router();

router.get('/', getReview);
router.get('/:id', getReviewId);
router.post('/:userId/:inscriptionId', postReview);
router.delete('/:id', deleteReview);

module.exports = router;