const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const noticiasRoute = require('./News')
const userPost = require('./userPost');
const userDelete = require('./userDelete');
const userGet = require('./userGet');
const userPut = require('./userPut');
const contactPost = require('./contactPost');
const contactGet = require('./contactGet');
const sport  = require('./sport')

const router = Router();
<<<<<<< Updated upstream

//router.use('/', noticiasRoute)
router.use('/user', userPost)
router.use('/user', userDelete)
router.use('/user', userGet)
router.use('/user', userPut)
router.use('/contact', contactPost)
router.use('/contact', contactGet)

router.use('/sport', sport)
=======
const newRoute = require('./News')
const commentRoute=require('./Comments')

router.use('/news', newRoute)
router.use('/comment', commentRoute)
>>>>>>> Stashed changes

module.exports = router;