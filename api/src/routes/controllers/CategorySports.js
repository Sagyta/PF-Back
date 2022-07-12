const { Category, User, CategorySport, Sport } = require("../../db");

async function getCategorySport(req, res, next) {
	try {
		const category = await CategorySport.findAll({
				where: {
					active: true,
				},
			
				include: [
					{
						model: User,
						attributes: ["name", "surname"],
					},
					{
						model: Category,
						attributes: ["name"],
					},
					{
						model: Sport,
						attributes: ["name"],
					},
				],
				attributes: { exclude: ["userId", "sportId", "categoryId"] },
			}
		);

		res.send(category);
	} catch (error) {
		next(error);
	}
}
async function getCategorySportAdmin(req, res, next) {
	try {
		const category = await CategorySport.findAll({
			include: [
				{
					model: User,
					attributes: ["name", "surname"],
				},
				{
					model: Category,
					attributes: ["name"],
				},
				{
					model: Sport,
					attributes: ["name"],
				},
			],
			attributes: { exclude: ["userId", "sportId", "categoryId"] },
		});
		res.send(category);
	} catch (error) {
		next(error);
	}
}
async function getCategorySportId(req, res, next) {
	const { id } = req.params;
	try {
		const categoryId = await CategorySport.findByPk(id, {
			include: [
				{
					model: User,
					attributes: ["name", "surname"],
				},
				{
					model: Category,
					attributes: ["name"],
				},
				{
					model: Sport,
					attributes: ["name"],
				},
			],
			attributes: { exclude: ["userId", "sportId", "categoryId"] },
		});
		res.send(categoryId);
	} catch (error) {
		next(error);
	}
}

async function postCategorySport(req, res, next) {
	const { day, start, finish, description, fee, userId, categoryId, sportId } =
		req.body;
	try {
		const exist = await CategorySport.findAll({
			where: {
				day,
				start,
				finish,
				sportId,
				categoryId,
			},
		});
		if (exist.length)
			return res
				.status(400)
				.send(
					"Rechazado, ese dia y horarios estan ya reservados para ese deporte"
				);

		if (!sportId || !categoryId || !userId || !day || !start || !finish) {
			res.status(404).send("Debe ingresar todos los datos");
		} else {
			let newCategory = await CategorySport.create({
				day,
				start,
				finish,
				description,
				fee,
				categoryId,
				sportId,
				userId,
			});
			res.send("Categoría Creada");
			return newCategory;
		}
	} catch (error) {
		next(error);
	}
}

async function putCategorySport(req, res, next) {
	try {
		const { id } = req.params;
		let updateCategorySport = await CategorySport.findByPk(id);
		await updateCategorySport.update({
			day: req.body.day,
			start: req.body.start,
			finish: req.body.finish,
			description: req.body.description,
			fee: req.body.fee,
			categoryId: req.body.categoryId,
			sportId: req.body.sportId,
			userId: req.body.userId,
			active: req.body.active,
		});
		res.status(200).send(updateCategorySport);
	} catch (error) {
		next(error);
	}
}

async function deleteCategorySport(req, res, next) {
	const { id } = req.params;
	try {
		const delCategory = await CategorySport.findByPk(id);
		if (delCategory) {
			await delCategory.destroy();
			return res.send("Categoría Sport eliminada con éxito");
		}
		res.status(404).send("Categoría Sport no encontrada");
	} catch (error) {
		next(error);
	}
}

module.exports = {
	getCategorySport,
	getCategorySportAdmin,
	getCategorySportId,
	postCategorySport,
	putCategorySport,
	deleteCategorySport,
};
