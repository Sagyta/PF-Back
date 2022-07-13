const {Router} = require('express')
const confirmacion = require('./controllers/postConfirmacion');
const router = Router();

router.post('/', confirmacion);


module.exports = router;