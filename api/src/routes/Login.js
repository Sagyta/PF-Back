const { Router } = require('express');
const { authAdmin, isBanned } = require('../Middleware/Auth');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { login, members } = require('./controllers/Login');


const router = Router();

router.post('/',isBanned,login)
router.get('/users',authAdmin, members)
module.exports = router;