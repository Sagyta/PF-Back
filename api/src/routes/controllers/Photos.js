const {Album, Photo} = require('../../db')

async function getPhoto (req,res,next){
    try {
        const photo = await Photo.findAll({
            include:[{
                model: Album,
                attributes: ['name'],
            }],
            attributes: {exclude: ['albumId']}
        })
        res.send(photo)

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

async function postPhoto(req,res,next){
    const { name, image } = req.body
    const {albumId} = req.params

    try {
        const exist = await Photo.findAll({
            where:{ name }
        })
        if(exist.length) return res.status(400)
        .send('Rechazado, esa foto ya existe en la base de datos');

        if(!name){
            res.status(404).send('Debe ingresar')
        }else{
            const createdInAlbum= await Album.findByPk(albumId)
            let newPhoto = await Photo.create({
                name,
                image,
            })
            createdInAlbum.addPhoto(newPhoto)
            res.send('La foto ha sido guardada')
            return newPhoto
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
    getPhoto,
    /* getCategoryId,*/
    postPhoto,
   /* putCategory,
    deleteCategory, */
}