const nodemailer = require("nodemailer");
require("dotenv").config();
const { user,password }= process.env
const htmlMailUserTemplate = `<!DOCTYPE html PÚBLICO "-//W3C//DTD XHTML 1.0 Transicional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transicional.dtd">
<html xmlns="http ://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:arial, 'helvetica neue', helvetica, sans-serif" >
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="x-apple-disable-message- reformateo">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="telephone=no" name="format-detection">
<title>Nueva plantilla</title><!--[if (mso 16)]>
<style type="text/css">
a {text-decoration: none;}
</style>
<![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
<o:Configuración de documento de Office>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96< /o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style type="text/css">
#outlook a {
padding:0;
}
.es-button {
mso-style-priority:100!important;
decoración de texto: ¡ninguno! importante;
}
a[x-apple-data-detectors] {
color:inherit!important;
decoración de texto: ¡ninguno! importante;
tamaño de fuente: ¡heredar! importante;
font-family:heredar!importante;
font-weight:heredar!importante;
line-height:heredar!importante;
}
.es-desk-hidden {
display:none;
flotador izquierdo;
desbordamiento: oculto;
ancho: 0;
altura máxima: 0;
altura de línea: 0;
mso-ocultar: todos;
}
[data-ogsb] .es-button {
border-width:0!important;
relleno:10px 30px 10px 30px!importante;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:36px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:20px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style>
</head>
<body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
<div class="es-wrapper-color" style="background-color:#FAFAFA"><!--[if gte mso 9]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
<v:fill type="tile" color="#fafafa"></v:fill>
</v:background>
<![endif]-->
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
<tr>
<td valign="top" style="padding:0;Margin:0">
<table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr>
<td align="center" style="padding:0;Margin:0">
<table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
<tr>
<td align="left" style="Margin:0;padding-top:15px;padding-left:20px;padding-right:20px;padding-bottom:30px">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" valign="top" style="padding:0;Margin:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0px"><img src="https://vpcaob.stripocdn.email/content/guids/CABINET_9ca3362f6e3ce2c3ea60da8fe4f8a850/images/78491618321704551.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="150"></td>
</tr>
<tr>
<td align="center" class="es-m-p0r es-m-p0l" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:40px;padding-right:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333;font-size:16px"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"> </font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">¡Gracias por unirte a nosotros! </font></font></font></font></font></font></font></font></font></font></font></font></font><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Como </font></font></font></font></font></font></font></font></font></font></font></font></font></font></font><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">socio de nuestro club ya puedes inscribirte a </font></font></font></font></font></font></font></font></font></font></font></font></font><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">&nbsp;las actividades que más te gustan.</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></p></td>
</tr>
<tr>
<td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#5C68E2;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;border-style:solid;border-color:#5C68E2;border-width:10px 30px 10px 30px;display:inline-block;background:#5C68E2;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center"><font style="vertical-align:inherit"><font style="vertical-align:inherit">IR A LA PAGINA</font></font></a></span></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
<tr>
<td align="center" style="padding:0;Margin:0">
<table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
<tr>
<td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="left" style="padding:0;Margin:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
<table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><a target="_blank" href="https://facebook.com/clubHenry" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="Facebook" src="https://vpcaob.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Pensión completa" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
<td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><a target="_blank" href="https://twitter.com/clubHenry" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="Gorjeo" src="https://vpcaob.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png" alt="Dos" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
<td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://instagram.com/clubHenry" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="Instagram" src="https://vpcaob.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
</tr>
</table></td>
</tr>
<tr>
<td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">© 2022 Club deportivo Henry, Inc. Todos los derechos reservados.</font></font></font></font></font></font></font></font></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"></font></font></font></font><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Brandsen 805, Barrio de La&nbsp; </font></font></font></font><em><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Boca</font></font></font></font></em><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"> , Ciudad de Buenos Aires </font></font></font></font><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">, 23467898</font></font></font></font></font></font></p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr>
<td class="es-info-area" align="center" style="padding:0;Margin:0">
<table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#FFFFFF">
<tr>
<td align="left" style="padding:20px;Margin:0">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" valign="top" style="padding:0;Margin:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr>
<td align="center" class="es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px"><a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"></a><font style="vertical-align:inherit"><font style="vertical-align:inherit">¿Ya no quieres recibir estos correos electrónicos?&nbsp;</font></font><a href="" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Darse de</font></font></a><font style="vertical-align:inherit"><font style="vertical-align:inherit"> baja</font></font><a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"></a></p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
</div>
</body>
</html>` 

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

const sendMail = async (email, subject, html/* newUser */) => {
    try{
        const transporter = createTrans ()
        const info = await transporter.sendMail({
            from: '"Club Deportivo Henry" <clubdhenry@gmail.com>', 
            to: email/*  `${newUser.email}` */, 
            subject/* : `Hola ${newUser.name}. Henry te da la bienvenida` */, 
            html/* : htmlMailUserTemplate */,
        });
    
        console.log("Mensaje enviado a: %s", info.messageId);
    
        return
    }catch(error){
        console.log('Algo no va bien con el mail', error);
    }
}
const getTemplate = (name, token) => {
    return `
      <head>
          <link rel="stylesheet" href="./style.css">
      </head>
      
      <div id="email___content">
          <img src="https://raw.githubusercontent.com/matias183/FrontHenryClub/main/src/utils/fotos/logo.gif" alt="">
          <h2>Hola ${ name }</h2>
          <p>Para confirmar tu email, ingresa al siguiente enlace</p>
          <a
              href="http://localhost:3001/user/confirm/${ token }"
              target="_blank"
          >Confirmar Cuenta</a>
      </div>
    `;
}


module.exports = {
  sendMail,
  getTemplate
}


//exports.sendMail = (newUser) => sendMail(newUser)