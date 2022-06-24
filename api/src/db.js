require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/club`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  define: {timestamps: false}
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { 
  New, 
  Comment, 
  Role, 
  User,
  Contact,
  Sport,
  Category,
  Pay,
  Teacher,
  Inscription,
} = sequelize.models;

// Aca vendrian las relaciones
// modelo.hasMany(modelo) de 1 a muchos;
// modelo.belongsTo(modelo) de muchos a 1

User.belongsToMany(Sport, {through:  'UserSport'});
Sport.belongsToMany(User, {through:  'UserSport'});

New.hasMany(Comment);
Comment.belongsTo(New); 

User.hasMany(Comment);
Comment.belongsTo(User);

Role.hasMany(User);
User.belongsTo(Role);

User.hasMany(Inscription)
Inscription.belongsTo(User);

Category.hasMany(Inscription)
Inscription.belongsTo(Category);

Sport.hasMany(Inscription)
Inscription.belongsTo(Sport);

Teacher.hasMany(Category)
Category.belongsTo(Teacher);

Sport.belongsToMany(Category, {through:  'CategorySport'});                      
Category.belongsToMany(Sport, {through:  'CategorySport'});


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};