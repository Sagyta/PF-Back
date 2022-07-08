const {Role, Sport, Category, User} = require('../db');


async function buildRole (){
    try {
    const role= await Role.findOne()
      if(!role){
        await Role.create({name: 'Admin'});
        await Role.create({name: 'Socio'});
        await Role.create({name: 'Teacher'});
      }
    } catch (error) {
        next(error)
    }
}
async function buildCategory (){
    try {
    const category= await Category.findOne()
      if(!category){
        await Category.create({name: 'Infantil'});
        await Category.create({name: 'Juvenil'});
        await Category.create({name: 'Mayores'});
      }
    } catch (error) {
        next(error)
    }
}
async function buildSport (){
    try {
        const sport= await Sport.findOne()
      if(!sport){
        await Sport.create({name: 'Futbol'});
        await Sport.create({name: 'Natacion'});
        await Sport.create({name: 'Hockey'});
      }
    } catch (error) {
        next(error)
    }
}
async function buildUser (){
    try {
        const user= await User.findOne()
      if(!user){
        await User.create({
        name: 'Admin',
        surname: 'Henry',
        address: "Bootcamp",
        phone: "52458",
        email: "admin@henry.com",
        code: 'd78d0672-7c23-40b0-9262-3912a7491778',
        status: 'VERIFIED', 
        username: "admin",
        password: "admin",
        dni: "12525452",
        isOlder: true,
        roleId: 1
        });
        await User.create({
        name: 'Socio',
        surname: 'Asociado',
        address: "Estudiante",
        phone: "5699885",
        email: "socio@henry.com",
        code: 'd78d0672-7c23-40b0-9262-3912a7491778',
        status: 'VERIFIED', 
        username: "socio",
        password: "asociado",
        dni: "12589452",
        isOlder: true,
        roleId: 2
        });
        await User.create({
          name: 'Profe',
          surname: 'Dresfera',
          address: "Mundo exterior",
          phone: "99558656",
          email: "teacher@henry.com",
          code: 'd78d0672-7c23-40b0-9262-3912a7491778',
          status: 'VERIFIED', 
          username: "profesor",
          password: "123456",
          dni: "3526563",
          isOlder: true,
          roleId: 3
          });
      }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    buildUser,
    buildRole,
    buildCategory,
    buildSport,
}