const Sequelize=require('sequelize')

const sequelize=require('../util/database')

const Table=sequelize.define('tables',{
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    dish:{
        type: Sequelize.STRING,
        allowNull: false
    },
    table:{
        type: Sequelize.STRING
    }

});

module.exports=Table