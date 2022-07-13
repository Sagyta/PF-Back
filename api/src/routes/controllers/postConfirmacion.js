async function postConfirmacion (req,res){
    let {results} = req.body
    console.log(results);
    res.send('hola');

}

module.exports = postConfirmacion;