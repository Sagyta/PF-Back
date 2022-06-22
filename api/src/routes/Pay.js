const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getPay, postPay, getPayId, putPay} = require('./controllers/Pay')

const router = Router();

router.get('/', getPay)
router.get('/:id', getPayId)
router.post('/', postPay)
router.put('/:id', putPay)
module.exports = router;