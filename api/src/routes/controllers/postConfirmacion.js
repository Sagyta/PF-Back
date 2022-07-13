const fetch = require('node-fetch');

async function postConfirmacion (req,res){
    let {results} = req.body
    const idTickey = results.payments[0].id;
    const userId = results.items[0].id;
    const CategorySportId = {CategorySportId: results.items[0].category_id};


    const url = 'https://backhenryclub.herokuapp.com/inscription';
    const data = await fetch(`${url}/${userId}`, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(CategorySportId)
    });

    res.send('hola');

}

module.exports = postConfirmacion;