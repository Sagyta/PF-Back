const { Router } = require('express');

const newRoute = require('./News')
const commentRoute=require('./Comments')
const user = require('./User');
const contact = require('./Contacts');
const sport  = require('./Sports');
const category = require('./Category');
const pay = require('./Pay')
const role = require('./Roles')
const inscriptionRoute = require('./Inscriptions');
const teacher = require('./Teacher')
const categorySport = require('./CategorySports')
const album = require('./Albums')
const photos = require('./Photos')
const calendar = require('./Calendars')
const login = require('./Login')
const newsletter = require('./Newsletter')
const auth0 = require('./GoogleLogin')

const router = Router();


router.use('/user', user)
router.use('/contact', contact)
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
router.use('/newsletter', newsletter)
router.use('/auth0',auth0)
module.exports = router;
