const jwt = require("jsonwebtoken");

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
  const decoded = jwt.verify(token,'login_key');
  if (decoded.user.role.name === "Admin"){
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

module.exports={
  authAdmin
}