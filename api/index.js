const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { buildRole, buildCategory, buildSport, buildUser} = require('./src/Preload/index.js');

conn.sync({ force: false }).then(() => { 
  
  server.listen(3001, () => {
    console.log('Server corriendo'); 
    buildRole();
    buildCategory();
    buildSport();
    buildUser();
  });
}); 