const {Router} = require('express');
const { auth0Test } = require('./controllers/Auth0Test');


const router = Router();

router.post('/', auth0Test);

module.exports = router;