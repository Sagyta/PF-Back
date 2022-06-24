const { Router } = require('express');

const {getTeacher, postTeacher, getTeacherId, putTeacher, deleteTeacher} = require('./controllers/Teacher')

const router = Router();

router.get('/', getTeacher)
router.get('/:id', getTeacherId)
router.post('/', postTeacher)
router.put('/:id', putTeacher)
router.delete('/:id', deleteTeacher)
module.exports = router;