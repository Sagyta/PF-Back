const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();


router.use('/marco', (req,res)=> {
    res.send('hola que tal mi nombre es marco')
})

module.exports = router;