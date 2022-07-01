const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const noticiasRoute = require('./News')
const newRoute = require('./News')
const commentRoute=require('./Comments')
const userPost = require('./userPost');
const userDelete = require('./userDelete');
const userGet = require('./userGet');
const userPut = require('./userPut');
const contactPost = require('./contactPost');
const contactGet = require('./contactGet');
const contactDelete = require('./contactDelete');
const sport  = require('./sport');
const category = require('./Category');
const pay = require('./Pay')
const role = require('./role')
const inscriptionRoute = require('./Inscriptions');
const teacher = require('./Teacher')
const categorySport = require('./CategorySports')
const album = require('./Albums')
const photos = require('./Photos')
const calendar = require('./Calendars')
const userConfirm = require('./userPost')
const login = require('./Login')

const router = Router();


router.use('/user', userPost)
router.use('/user', userDelete)
router.use('/user', userGet)
router.use('/user', userPut)
router.use('/user/confirm/:token', userConfirm)
router.use('/contact', contactPost)
router.use('/contact', contactGet)
router.use('/contact', contactDelete)
router.use('/sport', sport)
router.use('/news', newRoute)
router.use('/comment', commentRoute)
router.use('/category', category)
router.use('/pay', pay)
router.use('/inscription', inscriptionRoute)
router.use('/role', role)
router.use('/teacher', teacher)
router.use('/categorysport', categorySport)
router.use('/album', album)
router.use('/photo', photos)
router.use('/calendar', calendar)
router.use('/login', login)


module.exports = router;
