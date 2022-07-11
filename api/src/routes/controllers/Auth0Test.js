const {Calendar, Sport} = require('../../db.js');

async function auth0Test (req,res,next){
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

module.exports = {
  auth0Test
}