const {Album, Photo} = require('../../db')

async function getAlbum (req,res,next){
    try {
        const album = await Album.findAll({
            include:[{
                model: Photo,
                attributes: ['name', 'image']
            }],
            attributes: {exclude: ['albumId']}
        })
        res.send(album)

    } catch (error) {
        next(error)
    }
}

/* async function getCategoryId(req,res,next){
    const {id} = req.params
    try {
        const categoryId = await AlbumPhoto.findByPk(id,{
            include:[{
                model: Teacher,
                attributes: ['name', 'surname']
            }],
            attributes: {exclude: ['teacherId']}
        })
        res.send(categoryId)
    } catch (error) {
        next(error)
    }
}*/

async function postAlbum(req,res,next){
    const {
        name, 
        description,
    } = req.body
    try {
        const exist = await Album.findAll({
            where:{ name }
        })
        if(exist.length) return res.status(400)
        .send('Rechazado, ese album ya existe en la base de datos');

        if(!name){
            res.status(404).send('Debe ingresar nombre de album')
        }else{
             let newAlbum = await Album.create({
                name,
                description,
            })
            res.send('Album creado')
            return newAlbum
        }
    } catch (error) {
        next(error)
    }
}

/*async function putCategory(req,res,next){
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
} */

module.exports = {
    getAlbum,
    /* getCategoryId,*/
    postAlbum,
   /* putCategory,
    deleteCategory, */
}