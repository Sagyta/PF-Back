const nodemailer = require("nodemailer");
require("dotenv").config();
const { user,password }= process.env


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

const sendMail = async (email, subject, html) => {
    try{
        const transporter = createTrans ()
        const info = await transporter.sendMail({
            from: '"Club Deportivo Henry" <clubdhenry@gmail.com>', 
            to: email, 
            subject, 
            html,
        });
    
        console.log("Mensaje enviado a: %s", info.messageId);
    
        return
    }catch(error){
        console.log('Algo no va bien con el mail', error);
    }
}



module.exports = {
  sendMail
}


