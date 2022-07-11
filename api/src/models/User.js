const {DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
	sequelize.define('user',{
		id: {
			type:DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false
		},		
		name: {
			type: DataTypes.STRING,
		},
		surname: {
			type: DataTypes.STRING,
		},
		address: {
			type: DataTypes.STRING,
		},
		phone: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 'UNVERIFIED'
		},
		username: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
		},
		sub:{
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		membershipNumber: {
			type: DataTypes.INTEGER,
		},
		dni: {
			type: DataTypes.STRING,
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
		}, 
		photo:{
			type: DataTypes.STRING,
			defaultValue: 'https://cdn-icons-png.flaticon.com/512/1177/1177568.png'
		},
		isAdmin:{
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			allowNull: false
		},
		isBanned:{
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			allowNull: false
		}
	},{
		timestamps: false
	})
}