 const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => { 
  
  server.listen(3001, () => {
    console.log('Server corriendo'); // eslint-disable-line no-console
  });
}); 