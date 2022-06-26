const {Role, Sport, Category, User} = require('./src/db.js');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => { 
  
  server.listen(3001, () => {
    console.log('Server corriendo'); // eslint-disable-line no-console

    (async function () {
      await Role.create({name: 'Socio'});
      await Role.create({name: 'Admin'});
      await Sport.create({name: 'Futbol'});
      await Sport.create({name: 'Natacion'});
      await Sport.create({name: 'Hockey'});
      await Category.create({name:'Infantil'});
      await Category.create({name:'Juvenil'});
      await Category.create({name:'Mayores'});
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
      })
    })();
  });
}); 