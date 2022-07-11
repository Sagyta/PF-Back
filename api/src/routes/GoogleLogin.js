const {Router} = require('express');
const { googleLogin } = require('./controllers/GoogleLogin');


const router = Router();

router.post('/', googleLogin);

module.exports = router;