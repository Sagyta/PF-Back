const axios = require('axios');

async function postConfirmacion (req,res){
    try{
    let {results} = req.body
    const idTickey = results.payments[0].id;
    const userId = results.items[0].id;
    const CategorySportId = {CategorySportId: Number(results.items[0].category_id) };

    console.log(results,userId,CategorySportId);

    const url = 'https://backhenryclub.herokuapp.com/inscription';
   
    const uploadInfo = await axios.post(`${url}/${userId}`, CategorySportId);

    res.send({msg: 'Todo bien'})
    }catch(e){
        console.log(e.message);
        res.send(e);
    }
}

module.exports = postConfirmacion;