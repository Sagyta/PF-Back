const nodemailer = require("nodemailer");
require("dotenv").config();
const { user,password }= process.env
const { template } = require('./Templates/contactEmailTemplate');


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
const sendMail = async (newContact) => {
    const contactTemplate = template()
    const transporter = createTrans ()
    const info = await transporter.sendMail({
        from: '"Club Deportivo Henry" <clubdhenry@gmail.com>', 
        to: `${newContact.email}`, 
        subject: `Hola ${newContact.name}. Recibimos tu consulta`, 
        html: contactTemplate
    });

    console.log("Mensaje enviado a: %s", info.messageId);

    return
}

exports.sendMail = (newContact) => sendMail(newContact)