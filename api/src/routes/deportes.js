const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.get('/', (req,res,next)=>{
    res.send('soy ruta get deportes')
})
module.exports = router;