const { User, Role } = require("../../db.js");
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");

async function googleLogin(req, res, next) {
	try {
		console.log("comenzando proceso")
		let { name, surname, email, username, photo, sub } = req.body;

		if(!email) {
			res.status(400).json({error:"Please send a valid user"})
		} else {
		
    //Buscamos al usuario en la base de datos
		let user = await User.findOne({
			where: { email: email },
			attributes: ["id", "name"],
			include: [{ model: Role, attributes: ["name"] }],
		});

		if (user) { 
			console.log("mandando usuario")
      //Si existe, creamos el token y mandamos la información
			const loginKey = jwt.sign({user}, "login_key");
			res.json({ loginKey });
		} else {
			console.log('creando usuario')
			//Si el usuario no existe lo creamos
			const roleId = 2;
			const code = uuidv4();
			let newUser = await User.create({
				name,
				surname,
				email,
				username,
				photo,
				sub,
				roleId,
				sub: true,
				code,
			});
      //traemos los datos que nos interesan del usuario recien creado
			user = await User.findOne({
				where: { email: email },
				attributes: ["id", "name"],
				include: [{ model: Role, attributes: ["name"] }],
			});
      //generamos el token y lo mandamos
			const loginKey = jwt.sign({user}, "login_key");
			res.json({ loginKey });
		}

	}

	} catch (error) {
		next(error);
		return res.json({
			success: false,
			msg: "Error al registrar usuario",
		});
	}
}

module.exports = {
	googleLogin,
};
