const {DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
	sequelize.define('user',{
		id: {
<<<<<<< Updated upstream
			
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4
		},
=======
			type:DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false
		},		
>>>>>>> Stashed changes
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		surname: {
			type: DataTypes.STRING,
			allowNull: false
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false 
		},
		membershipNumber: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
		},
		dni: {
			type: DataTypes.STRING,
			allowNull: false
		},
		isOlder : {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		tutorName : {
			type: DataTypes.STRING,			
		},
		tutorPhone: {
			type: DataTypes.STRING
		},
		tutorEmail: {
			type: DataTypes.STRING
		}
	},{
		timestamps: false
	})
}