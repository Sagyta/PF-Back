const { Newsletter } = require("../../db");
const { v4: uuidv4 } = require('uuid');
const { getToken, getTokenData } = require('../../jwt.config');
const { sendMail } = require('../../Emailers/emailerNewsletter')
const { getTemplate } = require('../../Templates/newsletterTemplate');

async function getSuscription(req,res,next){
    try{
        const lista = await Newsletter.findAll()
        let enviar = await lista.filter(el=>el.status === true)
        res.send(enviar);
    }catch(error){
        next(error)
    }
}

async function postSuscription(req,res,next){
    let { email,status } = req.body;
    const code = uuidv4();
    try{
         let newSuscription = await Newsletter.create({
                email,
                status,
                code
            })

        const token = getToken ({ email, code})
        const template = getTemplate(token)

        await sendMail(email, 'Newsletter Club Deportivo Henry', template)
        await newSuscription.save()
        res.json({
            success: true,
            msg: 'Suscripción exitosa'
        });
    }catch(error){
        next(error)
        return res.json({
            success: false,
            msg: 'Error al registrar suscripción'
        });
    }
}

async function getBajaSuscription (req,res,next){
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
        const newsletter = await Newsletter.findOne({ where: {email: email} }) || null;
 
        if(newsletter === null) {
             return res.json({
                 success: false,
                 msg: 'Usuario no existe'
             });
        }
 
        // Verificar el código
        if(code !== newsletter.code) {
             return res.status(404).redirect('https://img.freepik.com/vector-gratis/concepto-fallo-tecnico-landing-page_52683-10996.jpg?t=st=1656446573~exp=1656447173~hmac=ad04d6e9d78368c16673ae8df038eaf78586d38eed5b748ef373a1eae52e84b3&w=740');
        }

        newsletter.status = false;
        await newsletter.save();
 
        // Redireccionar a la confirmación de unsuscribe
        return res.status(200).redirect('http://localhost:3000/home');
         
     } catch (error) {
         next(error);
         return res.json({
             success: false,
             msg: 'Error al dar de baja la suscripción'
         });
     }
}

async function putSuscription(req,res,next){
    try{
        let {id}=req.params;
        const data = await Newsletter.findOne({where: {id:id}});
       if(data === null){
           return res.send({msg: 'Lo siento pero no se encuentra ese id'});
       }else {
           data.set(req.body);
           await data.save();
           res.send(data);
       }
    }catch(error){
        next(error)
    }
}

module.exports = {
    getSuscription,
    postSuscription,
    getBajaSuscription,
    putSuscription,
    getBajaSuscription
}