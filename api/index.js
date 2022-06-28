const {Role, Sport, Category, User} = require('./src/db.js');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: true }).then(() => { 
  
  server.listen(3001, () => {
    console.log('Server corriendo'); 

    (async function () {
      const role= await Role.findOne()
      if(!role){
        await Role.create({name: 'Socio'});
        await Role.create({name: 'Admin'});
      }
      const category= await Category.findOne()
      if(!category){
        await Category.create({name: 'Infantil'});
        await Category.create({name: 'Juvenil'});
        await Category.create({name: 'Mayores'});
      }
      const sport= await Sport.findOne()
      if(!sport){
        await Sport.create({name: 'Futbol'});
        await Sport.create({name: 'Natacion'});
        await Sport.create({name: 'Hockey'});
      }
      /* const user= await User.findOne()
      if(!user){
        await User.create({
        name: 'Admin',
        surname: 'Henry',
        address: "Bootcamp",
        phone: "52458",
        email: "admin@henry.com",
        username: "admin",
        password: "admin",
        dni: "12525452",
        isOlder: true,
        roleId: 2
        });
      } */
    })();    
  });
}); 