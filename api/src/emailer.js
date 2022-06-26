const nodemailer = require("nodemailer");
const htmlMailTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="x-apple-disable-message-reformatting">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="telephone=no" name="format-detection">
<title>New email template 2022-06-25</title><!--[if (mso 16)]>
<style type="text/css">
a {text-decoration: none;}
</style>
<![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- -->
<link href="https://stripo.email/" rel="stylesheet"><!--<![endif]-->
<style type="text/css">
.rollover div {
font-size:0;
}
.section-title {
padding:10px 15px;
background-color:#f6f6f6;
border:1px solid #dfdfdf;
outline:0;
border-radius:8px;
margin-bottom:15px;
}
#outlook a {
padding:0;
}
.ExternalClass {
width:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height:100%;
}
.es-button {
mso-style-priority:100!important;
text-decoration:none!important;
}
a[x-apple-data-detectors] {
color:inherit!important;
text-decoration:none!important;
font-size:inherit!important;
font-family:inherit!important;
font-weight:inherit!important;
line-height:inherit!important;
}
.es-desk-hidden {
display:none;
float:left;
overflow:hidden;
width:0;
max-height:0;
line-height:0;
mso-hide:all;
}
[data-ogsb] .es-button {
border-width:0!important;
padding:15px 30px 15px 30px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:26px!important; text-align:left } h2 { font-size:22px!important; text-align:left } h3 { font-size:18px!important; text-align:left } h1 a { text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:26px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:22px!important } h3 a { text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:18px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:12px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:12px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style>
</head>
<body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
<div class="es-wrapper-color" style="background-color:#F0F0F0"><!--[if gte mso 9]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
<v:fill type="tile" color="#f0f0f0"></v:fill>
</v:background>
<![endif]-->
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
<tr style="border-collapse:collapse">
<td valign="top" style="padding:0;Margin:0">
<table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0">
<table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;padding-left:15px;padding-right:15px;padding-top:30px">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" valign="top" style="padding:0;Margin:0;width:570px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:30px"><h1 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:'Arial Narrow', Arial, sans-serif;letter-spacing:0.5px;font-size:28px;font-style:normal;font-weight:normal;color:#333333"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Gracias por comunicarte con el Club Deportivo Henry </font></font></font></font></font></font></font></font></font></font><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">.</font></font></font></font></font></font></font></font></font></font></h1></td>
</tr>
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#999999;font-size:14px"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">En breve estarás recibiendo la respuesta a tu consulta. Puedes</font></font></font><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">&nbsp;seguirnos en nuestras redes sociales e&nbsp;interactuar con nosotros.&nbsp;</font></font></font><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Tienes a disposicion también&nbsp;nuestros telefonos para comunicarte dentro de los horarios de atencion del club.</font></font></font></font></p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0">
<table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;padding-top:15px">
<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" valign="top" style="padding:0;Margin:0;width:600px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-bottom:15px;padding-top:30px;font-size:0">
<table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" bgcolor="#ffffff" style="padding:0;Margin:0;padding-top:30px;padding-left:30px;padding-right:30px;background-color:#ffffff"><!--[if mso]><table style="width:540px" cellpadding="0" cellspacing="0"><tr><td style="width:255px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:255px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="left" style="padding:0;Margin:0;padding-right:10px;width:45px;font-size:0px"><img src="https://vpcaob.stripocdn.email/content/guids/CABINET_b3ad24678cbb4d23876b91c37b9a8eb8/images/time.png" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="45" alt></td>
<td valign="top" align="left" style="padding:0;Margin:0;padding-bottom:5px"><h4 style="Margin:0;line-height:100%;mso-line-height-rule:exactly;font-family:'Arial Narrow', Arial, sans-serif;letter-spacing:0.5px;padding-bottom:5px"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Horario de trabajo:</font></font></font></font></h4><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">lun-vie 9.00 - 20.00;</font></font></font></font></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Sáb10.00 - 18.00;</font></font></font></font></p></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td><td style="width:30px"></td><td style="width:255px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;width:255px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="left" style="padding:0;Margin:0;padding-right:10px;width:45px;font-size:0px"><img src="https://vpcaob.stripocdn.email/content/guids/CABINET_b3ad24678cbb4d23876b91c37b9a8eb8/images/location.png" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="45" alt></td>
<td valign="top" align="left" style="padding:0;Margin:0;padding-bottom:5px"><h4 style="Margin:0;line-height:100%;mso-line-height-rule:exactly;font-family:'Arial Narrow', Arial, sans-serif;letter-spacing:0.5px;padding-bottom:5px"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Dirección:</font></font></font></font></h4><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">Brandsen 805, Barrio de La&nbsp;<em>Boca</em>, Ciudad de Buenos Aires.<br></p></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td></tr></table><![endif]--></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" bgcolor="#ffffff" style="Margin:0;padding-top:20px;padding-bottom:30px;padding-left:30px;padding-right:30px;background-color:#ffffff"><!--[if mso]><table style="width:540px" cellpadding="0" cellspacing="0"><tr><td style="width:255px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
<tr style="border-collapse:collapse">
<td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:255px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="left" style="padding:0;Margin:0;padding-right:10px;width:45px;font-size:0px"><img src="https://vpcaob.stripocdn.email/content/guids/CABINET_b3ad24678cbb4d23876b91c37b9a8eb8/images/technicalsupport.png" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="45" alt></td>
<td valign="top" align="left" style="padding:0;Margin:0">
<table width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0"><h4 style="Margin:0;line-height:100%;mso-line-height-rule:exactly;font-family:'Arial Narrow', Arial, sans-serif;letter-spacing:0.5px;padding-bottom:5px"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Correo electrónico:</font></font></font></font></h4><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px"><a target="_blank" href="mailto:clubHenry@gmail.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:12px">clubHenry@gmail.com</a></p></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" valign="top" style="padding:0;Margin:0;padding-top:10px"><h4 style="Margin:0;line-height:100%;mso-line-height-rule:exactly;font-family:'Arial Narrow', Arial, sans-serif;letter-spacing:0.5px;padding-bottom:5px">Follow:</h4></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" valign="top" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:10px;font-size:0">
<table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://facebook.com.clubHenry" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="Facebook" src="https://vpcaob.stripocdn.email/content/assets/img/social-icons/rounded-colored/facebook-rounded-colored.png" alt="Fb" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
<td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://instagram.com/clubHenry" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="Instagram" src="https://vpcaob.stripocdn.email/content/assets/img/social-icons/rounded-colored/instagram-rounded-colored.png" alt="Ig" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
<td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://twitter.com/clubHenry" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="Twitter" src="https://vpcaob.stripocdn.email/content/assets/img/social-icons/rounded-colored/twitter-rounded-colored.png" alt="Tw" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td><td style="width:30px"></td><td style="width:255px" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;width:255px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;width:45px;font-size:0px"><img src="https://vpcaob.stripocdn.email/content/guids/CABINET_b3ad24678cbb4d23876b91c37b9a8eb8/images/phoneset.png" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="45" alt></td>
<td align="left" style="padding:0;Margin:0;padding-bottom:5px"><h4 style="Margin:0;line-height:100%;mso-line-height-rule:exactly;font-family:'Arial Narrow', Arial, sans-serif;letter-spacing:0.5px;padding-bottom:5px"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Telefono:</font></font></font></font></h4><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#666666;font-size:12px" href="tel:1234567890"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">123 456-78-90</font></font></font></font></a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#666666;font-size:12px" href="tel:1234567890"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">123 456-78-90</font></font></font></font></a><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#666666;font-size:12px" href="tel:1234567890"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"></font></font></font></font></a></p></td>
</tr>
</table></td>
</tr>
</table><!--[if mso]></td></tr></table><![endif]--></td>
</tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0">
<table class="es-content-body" align="center" cellpadding="0" cellspacing="0" bgcolor="transparent" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
<tr style="border-collapse:collapse">
<td align="left" bgcolor="transparent" style="padding:0;Margin:0;padding-top:40px;padding-bottom:40px;background-color:transparent">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="center" style="padding:0;Margin:0;width:600px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
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

//*Funcion principal de Transport

const createTrans = () =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "88cf01d4ed8bd9",
          pass: "5d103dc47ade39"
        }
    });
    return transport;
}

const sendMail = async (newContact) => {
    const transporter = createTrans ()
    const info = await transporter.sendMail({
        from: '"Club Deportivo Henry" <clubHenry@gmail.com>', 
        to: `${newContact.email}`, 
        subject: `Hola ${newContact.name}. Recibimos tu consulta`, 
        html: htmlMailTemplate
    });

    console.log("Mensaje enviado a: %s", info.messageId);

    return
}

exports.sendMail = (newContact) => sendMail(newContact)