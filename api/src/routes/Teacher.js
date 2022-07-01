const { Router } = require('express');

const {getTeacher, getTeacherId, putTeacher} = require('./controllers/Teacher')

const router = Router();

router.get('/', getTeacher)
router.get('/:id', getTeacherId)
router.put('/:id', putTeacher)
module.exports = router;