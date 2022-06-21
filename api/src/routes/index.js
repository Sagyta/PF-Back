const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const noticiasRoute = require('./noticias')
const userPost = require('./user');

router.use('/', noticiasRoute)
router.use('/user/:id', userPost)

module.exports = router;