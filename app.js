const path=require('path')

const express=require('express')

const bodyParser=require('body-parser')

const Sequelize=require('./util/database')



const app=express()

const cors=require('cors')

const adminRoutes=require('./routes/tableRoutes')

app.use(cors())



app.use(bodyParser.json({extended:false}))

app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes)

Sequelize.sync().then(res=>{
    app.listen(4000)
}).catch(err=>{console.log(err)})