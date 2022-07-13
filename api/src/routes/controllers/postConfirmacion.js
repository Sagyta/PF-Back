async function postConfirmacion (req,res){
    let {results} = req.body
    console.log(results.payments.id);
    console.log(results.items[0].id);

    res.send('hola');

}

module.exports = postConfirmacion;