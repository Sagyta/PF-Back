const { User } = require("../db");
var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { getToken, getTokenData } = require('../jwt.config');
const { sendMail } = require('../emailerUser');
const { getTemplate } = require('../Templates/userEmailTemplate');


router.post("/", async(req,res,next)=>{
    let { id,name, surname, address, phone, email, username, password, dni, isOlder, tutorName, tutorPhone, tutorEmail, roleId }= req.body
   
    if(!name || !surname || !address || !phone || !email || !username || !password || !dni){
       if(isOlder !==true || isOlder !==false)
        return res.json({error: "Faltan datos necesarios"})
    }
    if(!roleId){
        roleId = 1
    }
    if(await User.findOne({ where: {dni: dni}})) return res.json({error: "DNI ya existente en nuestra base de datos"})
    if(await User.findOne({ where: {username: username}})) return res.json({error: "Usuario ya existente en nuestra base de datos"})
    if(await User.findOne({ where: {email: email}})) return res.json({error: "Email ya existente"})

    const code = uuidv4();
    try{
        let newUser = await User.create({
            id,
            name,
            surname,
            address,
            phone,
            code,
            email,
            username,
            password,
            dni,
            isOlder,
            tutorName,
            tutorPhone,
            tutorEmail,
            roleId
        })

        const token = getToken ({ email, code})
        const template = getTemplate(name, token)

        await sendMail(email, 'Confirma tu email en Club Deportivo Henry', template)
        await newUser.save()
        res.json({
            success: true,
            msg: 'Registrado correctamente'
        });
    }catch(error){
        next(error)
        return res.json({
            success: false,
            msg: 'Error al registrar usuario'
        });
    }
})

router.get('/confirm/:token', async(req, res) => {
    try {
       // Obtener el token
       const { token } = req.params;
       
       // Verificar la data
       const data = await getTokenData(token);

       if(data === null) {
            return res.json({
                success: false,
                msg: 'Error al obtener data'
            });
       }

       //console.log(data);

       const { email, code } = data.data;

       // Verificar existencia del usuario
       const user = await User.findOne({ where: {email: email} }) || null;

       if(user === null) {
            return res.json({
                success: false,
                msg: 'Usuario no existe'
            });
       }

       // Verificar el código
       if(code !== user.code) {
            return res.status(404).redirect('https://img.freepik.com/vector-gratis/concepto-fallo-tecnico-landing-page_52683-10996.jpg?t=st=1656446573~exp=1656447173~hmac=ad04d6e9d78368c16673ae8df038eaf78586d38eed5b748ef373a1eae52e84b3&w=740');
       }

       // Actualizar usuario
       user.status = 'VERIFIED';
       await user.save();

       // Redireccionar a la confirmación
       return res.status(200).redirect('https://raw.githubusercontent.com/matias183/FrontHenryClub/main/src/utils/fotos/logo.gif');
        
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            msg: 'Error al confirmar usuario'
        });
    }
})

module.exports = router;