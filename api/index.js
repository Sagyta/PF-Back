const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { buildRole, buildCategory, buildSport, buildUser} = require('./src/Preload/index.js');

const PORT = process.env.PORT || 3001

conn.sync({ force: true }).then(() => { 
  
  server.listen(PORT, () => {
    console.log('Server corriendo'); 
    buildRole();
    buildCategory();
    buildSport();
    buildUser();
  });
}); 