const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const noticiasRoute = require('./noticias')

router.use('/', noticiasRoute)

module.exports = router;