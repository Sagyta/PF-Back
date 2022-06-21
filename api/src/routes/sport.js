const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const deleteSport = require('./controllers/deleteSport');
const getSport = require('./controllers/getSport');
const postSport = require('./controllers/postSport');
const putSport = require('./controllers/putSport');

const router = Router();

router.delete('/', deleteSport);
router.put('/', putSport);
router.get('/', getSport);
router.post('/', postSport);

module.exports = router;