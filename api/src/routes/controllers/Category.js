const {Category} = require('../../db')

async function getCategory (req,res,next){
    try {
        const category = await Category.findAll()
        res.send(category)

    } catch (error) {
        next(error)
    }
}

async function getCategoryId(req,res,next){
    const {id} = req.params
    try {
        const categoryId = await Category.findByPk(id)
        res.send(categoryId)
    } catch (error) {
        next(error)
    }
}

async function postCategory(req,res,next){
    const {
        name
    } = req.body
    try {
        if(!name){
            res.status(404).send('Debe ingresar nombre de categoria')
        }else{
             let newCategory = await Category.create({
                name
            })
            res.send('Categoría Creada')
            return newCategory
        }
    } catch (error) {
        next(error)
    }
}

async function putCategory(req,res,next){
    try{
        const { id }= req.params
        let updateCategory = await Category.findOne({where:{id:id}})
        await updateCategory.update({name: req.body.name})
        res.status(200).send(updateCategory)
    }catch(error){
        next(error)
    }
}

async function deleteCategory(req,res,next){
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
}

module.exports = {
    getCategory,
    getCategoryId,
    postCategory,
    putCategory,
    deleteCategory,
}