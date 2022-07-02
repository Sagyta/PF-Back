const {Router} = require('express');
const { getCalendar, getIdCalendar, postCalendar, putCalendar, deleteCalendar } = require('./controllers/Calendars');


const router = Router();

router.get('/', getCalendar);
router.get('/:id', getIdCalendar);
router.post('/', postCalendar);
router.put('/:id', putCalendar);
router.delete('/:id', deleteCalendar);

module.exports = router;