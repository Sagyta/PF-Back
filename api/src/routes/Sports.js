const { Router } = require('express');
const { getSport, postSport, putSport, deleteSport } = require('./controllers/Sports');

const router = Router();

router.get('/', getSport);
router.post('/', postSport);
router.put('/', putSport);
router.delete('/', deleteSport);

module.exports = router;