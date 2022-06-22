const {Router} = require('express');

const getRole = require('./controllers/getRole');
const postRole = require('./controllers/postRole');
const deleteRole = require('./controllers/deleteRole');
const putRole = require('./controllers/putRole');
const router = Router();

router.get('/', getRole);
router.post('/', postRole);
router.put('/', putRole);
router.delete('/', deleteRole);

module.exports = router;