const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const sport  = require('./sport')

router.use('/sport', sport)

module.exports = router;