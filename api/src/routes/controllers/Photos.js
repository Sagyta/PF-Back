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

async function getPhotoId(req,res,next){
    const {id} = req.params
    try {
        const photoId = await Photo.findByPk(id,{
            include:[{
                model: Album,
                attributes: ['name', 'description']
            }],
            attributes: {exclude: ['albumId']}
        })
        res.send(photoId)
    } catch (error) {
        next(error)
    }
}

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

async function putPhoto(req,res,next){
    try{
        const { id }= req.params
        let updatePhoto = await Photo.findByPk(id)
        await updatePhoto.update({
            name: req.body.name,
            image: req.body.image,
        })
        res.status(200).send(updatePhoto)
    }catch(error){
        next(error)
    }
}

async function deletePhoto(req,res,next){
    const {id} = req.params
    try {
        const delPhoto = await Photo.findByPk(id)
        if(delPhoto){
            await delPhoto.destroy()
            return res.send('Foto eliminada con éxito')
        }
        res.status(404).send('Foto no encontrada')
    } catch (error) {
        next(error)
    }
} 

module.exports = {
    getPhoto,
    getPhotoId,
    postPhoto,
    putPhoto,
    deletePhoto, 
}