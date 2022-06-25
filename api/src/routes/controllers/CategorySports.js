const {Category, Teacher, CategorySport, Sport} = require('../../db')

 async function getCategorySport (req,res,next){
    try {
        const category = await CategorySport.findAll({
            include:[
                {
                model: Teacher,
                attributes: ['name', 'surname']
                },
                {
                model: Category,
                attributes: ['name']
                },
                {
                model: Sport,
                attributes: ['name']
                },
                
            ],
            attributes: {exclude: ['teacherId', 'sportId', 'categoryId']}
        })
        res.send(category)

    } catch (error) {
        next(error)
    }
}

async function getCategorySportId(req,res,next){
    const {id} = req.params
    try {
        const categoryId = await CategorySport.findByPk(id,{
            include:[
                {
                model: Teacher,
                attributes: ['name', 'surname']
                },
                {
                model: Category,
                attributes: ['name']
                },
                {
                model: Sport,
                attributes: ['name']
                },
        ],
                 attributes: {exclude: ['teacherId', 'sportId', 'categoryId']}
        })
        res.send(categoryId)
    } catch (error) {
        next(error)
    }
}

async function postCategorySport(req,res,next){
    const {
    day, start, finish, description, fee, teacherId, categoryId, sportId
    } = req.body
    try {
        const exist = await CategorySport.findAll({
            where:{
                day,
                start,
                finish,
                sportId,
                categoryId
            }
        })
        if(exist.length) return res.status(400)
        .send('Rechazado, ese dia y horarios estan ya reservados para ese deporte');

        if(!sportId){
            res.status(404).send('Debe ingresar un deporte')
        }else{
             let newCategory = await CategorySport.create({
                day,
                start,
                finish,
                description,
                fee,
                categoryId,
                sportId,
                teacherId,
            })
            res.send('Categoría Creada')
            return newCategory
        }
    } catch (error) {
        next(error)
    }
}

/* async function putCategorySport(req,res,next){
    try{
        const { id }= req.params
        let updateCategory = await Category.findOne({where:{id:id}})
        await updateCategory.update({name: req.body.name})
        res.status(200).send(updateCategory)
    }catch(error){
        next(error)
    }
}

async function deleteCategorySport(req,res,next){
    const {id} = req.params
    try {
        const delCategory = await Category.findByPk(id)
        if(delCategory){
            await delCategory.destroy()
            return res.send('Categoría eliminada con éxito')
        }
        res.status(404).send('Categoría no encontrada')
    } catch (error) {
        next(error)
    }
} */

module.exports = {
     getCategorySport,
   getCategorySportId,
    postCategorySport,
  /*   putCategorySport,
    deleteCategorySport, */
}