require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/club`, {
  logging: false, 
  native: false, 
  define: {timestamps: false}
});
const basename = path.basename(__filename);

const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


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
  CategorySport,
  Album,
  Photo,
  Calendar,
  Review,
} = sequelize.models;

// Aca vendrian las relaciones
// modelo.hasMany(modelo) de 1 a muchos;
// modelo.belongsTo(modelo) de muchos a 1

User.belongsToMany(Sport, {through:  'UserSport'});
Sport.belongsToMany(User, {through:  'UserSport'});

New.hasMany(Comment);
Comment.belongsTo(New); 

User.hasMany(New)
New.belongsTo(User);

New.belongsTo(Sport)
Sport.hasMany(New);

User.hasMany(Comment);
Comment.belongsTo(User);

Role.hasMany(User, {foreignKey: 'roleId', sourceKey: 'id'});
User.belongsTo(Role, {foreignKey: 'roleId',targetKey: 'id'});

User.hasMany(Inscription)
Inscription.belongsTo(User);

Inscription.belongsTo(CategorySport)
CategorySport.hasMany(Inscription)

Sport.hasMany(CategorySport)
CategorySport.belongsTo(Sport);

Category.hasMany(CategorySport)
CategorySport.belongsTo(Category);

User.hasMany(CategorySport)
CategorySport.belongsTo(User);

Album.hasMany(Photo)
Photo.belongsTo(Album);

Sport.hasMany(Calendar, {foreignKey: 'sportId', sourceKey: 'id'});
Calendar.belongsTo(Sport, {foreignKey: 'sportId', targetKey: 'id'});

User.hasMany(Review)
Review.belongsTo(User)

Inscription.hasMany(Review)
Review.belongsTo(Inscription)

module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};