const {Router} = require('express');
const { getRole, postRole, putRole, deleteRole } = require('./controllers/Roles');



const router = Router();

router.get('/', getRole);
router.post('/', postRole);
router.put('/', putRole);
router.delete('/', deleteRole);

module.exports = router;