const jwt = require("jsonwebtoken");
const { New, Comment, User, Sport } = require("../db");


function Prueba(req,res,next) {
  //Header que llega con la solicitud del front
  // console.log(req.headers) 
  const bearerHeader = req.headers['authorization'] //Fijarse como se manda "Authorization" en el front (si es que se tiene que mandar manualmente)
  console.log(bearerHeader)
  if(typeof bearerHeader !== "undefined"){
    const bearer = bearerHeader.split(" ")
    console.log(bearer)
    req.token = bearer[1]
    next()
  } else {
    res.sendStatus(403)
  }
}

function authAdmin(req,res,next) {
  /*           Enviar el rol por header                    */
  //Header que llega con la solicitud del front
  // console.log(req.headers)
  // const role = req.headers['authorization']  
  // console.log(role)             


  // if(role === 'admin'){
  //   next()
  // } else {
  //   res.sendStatus(403)
  // }

  /*            Enviar el token por header             */
  try {
    const token = req.headers['authorization'];
    const isAdmin = jwt.verify(token,'login_key').user.isAdmin;
    if (isAdmin){
      // res.json(decoded)
      next()
    } else {
      req.err = "No permitido"
      next()
    }
    
  } catch (error) {
    console.log(error)
    next(error)
  }
  }
  async function isBanned(req,res,next){
    try {
      const {email} = req.body
      const user= await User.findOne({where:{email: email}})
      if(user.isBanned){
       return res.status(401).send('Usuario baneado')
      }
      next()
    } catch (error) {
      next(error)
    }
  }
module.exports={
  authAdmin,
  isBanned,
}