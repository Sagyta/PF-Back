const nodemailer = require("nodemailer");
require("dotenv").config();
const { user,password }= process.env

//*Funcion principal de Transport

const createTrans = () =>{
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: `${user}`,
          pass: `${password}`
        }
    });
    return transport;
}

const sendMailInscripcion = async (email, subject) => {
    const transporter = createTrans ()
    const info = await transporter.sendMailInscripcion({
        from: '"Club Deportivo Henry" <clubdhenry@gmail.com>', 
        to: email/* `${insertInscription.email}` */, 
        subject/* : `Hola ${insertInscription.name}. Te enviamos el detalle de tu inscripción` */, 
        html: `
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        
        <div id="email___content">
            <img src="https://raw.githubusercontent.com/matias183/FrontHenryClub/main/src/utils/fotos/logo.gif" alt="">
            <h2>Hola </h2>
            <p>Te inscribiste exitosamente a: </p>
           
        </div>
      `
    });

    console.log("Mensaje enviado a: %s", info.messageId);

    return
}

//.sendMailInscripcion = (userInscripto) => sendMailInscripcion(userInscripto)
module.exports = {
    sendMailInscripcion
  }