const express=require('express')

const router=express.Router()

const adminController=require('../controllers/admin')

router.get('/get-details',adminController.getTableDetails)

router.post('/add-details',adminController.postTableDetails)

router.post('/delete/:uid',adminController.postDeleteDetails)

module.exports=router