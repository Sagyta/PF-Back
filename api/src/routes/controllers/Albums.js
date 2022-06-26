const {Album, Photo} = require('../../db')

async function getAlbum (req,res,next){
    try {
        const album = await Album.findAll({
            attributes: {exclude: ['albumId']}
        })
        res.send(album)

    } catch (error) {
        next(error)
    }
}

async function getAlbumId(req,res,next){
    const {id} = req.params
    try {
        const albumId = await Album.findByPk(id,{
            include:[{
                model: Photo,
                attributes: ['name', 'image']
            }],
            attributes: {exclude: ['albumId', 'name', 'description']}
        })
        res.send(albumId)
    } catch (error) {
        next(error)
    }
}

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

async function putAlbum(req,res,next){
    try{
        const { id }= req.params
        let updateAlbum = await Album.findByPk(id)
        await updateAlbum.update({
            name: req.body.name,
            description: req.body.description
        })
        res.status(200).send('Se ha actualizado el album')
        return updateAlbum
    }catch(error){
        next(error)
    }
}

async function deleteAlbum(req,res,next){
    const {id} = req.params
    try {
        const deleteAlbum = await Album.findByPk(id)
        if(deleteAlbum){
            await deleteAlbum.destroy()
            return res.send('Album eliminado con éxito')
        }
        res.status(404).send('Album no encontrado')
    } catch (error) {
        next(error)
    }
} 

module.exports = {
    getAlbum,
    getAlbumId,
    postAlbum,
    putAlbum,
    deleteAlbum,
}