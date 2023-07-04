const Sequelize=require('sequelize')

const sequelize=new Sequelize("test-project","root","Sumanth1@",{
    dialect:"mysql",
    host:'localhost'
})

module.exports=sequelize