const {Pay} = require('../../db')

async function getPay(req,res,next){
    try {
        const payment = await Pay.findAll()
        res.send(payment)

    } catch (error) {
        next(error)
    }
}

async function getPayId(req,res,next){
    const {id} = req.params
    try {
        const paymentId = await Pay.findByPk(id)
        res.send(paymentId)
    } catch (error) {
        next(error)
    }
}

async function postPay(req,res,next){
    const {
        nroPay
    } = req.body
    try {
        if(!nroPay){
            res.status(404).send('Debe ingresar número de pago')
        }else{
             let newPayment = await Pay.create({
                nroPay
            })
            res.send('Pago Creado')
            return newPayment
        }
    } catch (error) {
        next(error)
    }
}

async function putPay(req,res,next){
    try{
        const { id }= req.params
        let updatePayment = await Pay.findOne({where:{id:id}})
        await updatePayment.update({nroPay: req.body.nroPay})
        res.status(200).send(updatePayment)
    }catch(error){
        next(error)
    }
}

module.exports = {
    getPay,
    getPayId,
    postPay,
    putPay,
}