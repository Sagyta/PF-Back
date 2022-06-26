const {Router} = require('express');

const {getCalendar, getIdCalendar} = require('./controllers/getCalendar');
const postCalendar = require('./controllers/postCalendar');
const putCalendar = require('./controllers/putCalendar');
const deleteCalendar = require('./controllers/deleteCalendar');

const router = Router();

router.get('/', getCalendar);
router.get('/:id', getIdCalendar);
router.post('/', postCalendar);
router.put('/:id', putCalendar);
router.delete('/:id', deleteCalendar);



module.exports = router;