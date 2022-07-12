const { User, Role } = require("../../db");
const { v4: uuidv4 } = require('uuid');
const { getToken, getTokenData } = require('../../jwt.config');
const { sendMail } = require('../../Emailers/emailerUser')
const { getTemplate } = require('../../Templates/userEmailTemplate');

async function getUser(req, res, next) {
  try {
    const data = await User.findAll({
      include: {
        model: Role,
        attributes: ["name"],
      },
    });

    let users = [...data];

    let maps = users.map((e) => {
      if (e.isOlder === true) {
        return {
          id: e.id,
          name: e.name,
          surname: e.surname,
          address: e.address,
          phone: e.phone,
          email: e.email,
          username: e.username,
          membershipNumber: e.membershipNumber,
          dni: e.dni,
          role: e.role !== null ? e.role.name : "no tiene rol",
          isOlder: e.isOlder,
          photo: e.photo,
          isBanned: e.isBanned 
        };
      } else {
        return {
          id: e.id,
          name: e.name,
          surname: e.surname,
          address: e.address,
          phone: e.phone,
          email: e.email,
          username: e.username,
          membershipNumber: e.membershipNumber,
          dni: e.dni,
          role: e.role !== null ? e.role.name : "no tiene rol",
          isOlder: e.isOlder,
          tutorName: e.tutorName,
          tutorPhone: e.tutorPhone,
          tutorEmail: e.tutorEmail,
          photo: e.photo,
          isBanned: e.isBanned 
        };
      }
    });

    res.send(maps);
  } catch (error) {
    next(error);
  }
}

async function getUserId(req, res, next) {
  try {
    let regexUuid =
      /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
    let { id } = req.params;
    if (!regexUuid.test(id)) {
      return res.send({ msg: "Lo siento escriba un id valido" });
    } else {
      const usuario = await User.findByPk(id, {
        include: [
          {
            model: Role,
            attributes: ["name"],
          },
        ],
        attributes: { exclude: ["roleId", "code", "password"] },
      });
      if (usuario === null) {
        return res.send({
          msg: "Lo siendo pero no hay ningun usuario con ese id",
        });
      } else {
        console.log(usuario);
        res.send(usuario);
      }
    }
  } catch (error) {
    next(error);
  }
}

async function postUser (req,res,next){
    let { id,name, surname, address, phone, email, username, password, dni, isOlder, tutorName, tutorPhone, tutorEmail, photo, roleId }= req.body
   
    if(!name || !surname || !address || !phone || !email || !username || !password || !dni){
       if(isOlder !==true || isOlder !==false)
        return res.json({error: "Faltan datos necesarios"})
    }
    if(!roleId){
        roleId = 2
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
            photo,
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
}

async function getConfirm (req,res,next){
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
        return res.status(200).redirect('http://localhost:3000/home');
         
     } catch (error) {
         next(error);
         return res.json({
             success: false,
             msg: 'Error al confirmar usuario'
         });
     }
}

async function putUser (req,res,next){
    try {
        let regexUuid = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
       let {id} = req.params;
       if(!regexUuid.test(id)){
           return res.send({msg: 'ingrese un ID valido'});
       }else{
       const data = await User.findOne({where: {id:id}});
       if(data === null){
           return res.send({msg: 'Lo siento pero no se encuentra ese usuario'});
       }else {
      
           data.set(req.body);
           await data.save();
           res.send(data);
       }
     }
    }catch(error){
        next(error)
    }
}

async function deleteUser (req,res,next){
    try{
        let regexUuid = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
    
        let {id} = req.params;
        if(!regexUuid.test(id)){
            return res.send({msg: 'Lo siento, escribe un id valido'})
        }else {
    
        const usuario = await User.findOne({where: {id:id}});
        if(usuario === null){
            return res.send({msg: 'Lo siento, no existe ese usuario en la base de datos'})
        }else {
            await usuario.destroy();
            return res.send({msg:'Usuario Eliminado exitosamente'});
        }
     }
     }catch(error){
        next(error);
     }
}

module.exports = {
    getUser,
    getUserId,
    postUser,
    getConfirm,
    putUser,
    deleteUser
}