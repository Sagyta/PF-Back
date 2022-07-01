const { Router } = require('express');
const { getContact, postContact, deleteContact } = require('./controllers/Contacts');


const router = Router();

router.get('/', getContact)
router.post('/', postContact)
router.put('/:id', deleteContact)

module.exports = router;