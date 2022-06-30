const { User, Role } = require("../../db");
const jwt = require("jsonwebtoken");

async function login(req, res, next) {
	try {
		const { email, password } = req.body;
		//Construir el usuario para mandar
		const user = await User.findOne({
			where: { email: email },
			attributes: ["id", "name"],
			include: [{ model: Role, attributes: ["name"] }],
		});
		//Password en otra variable para no mandarla al front
		const pass = await User.findOne({
			where: { email: email },
			attributes: ["password"],
		});

		if (!user) {
			//Verificación de que el usuario está registrado
			res.send("Ese usuario no existe");
		} else if (pass.password !== password) {
			//Verificación de contraseña
			res.send("usuario o contraseña incorrecta");
		} else {
			const loginKey = jwt.sign({ user }, "login_key");
			res.json({ loginKey });
		}
	} catch (error) {
		next(error);
	}
}

async function members(req, res, next) {
	try {
		console.log(!!req.err)
		if(req.err){
			console.log("Aqui toy")
			res.status(403).send("Prohibido")
		}
		else{

			const users = await User.findAll({
				include: {
					model: Role,
					attributes: ["name"],
				},
			});
			
			res.json(users)
		}

	} catch (error) {
		next(error)
	}
}

module.exports = {
	login,
	members
};
