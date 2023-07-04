const Table=require('../models/table')


exports.getTableDetails=(req,res,next)=>{
    Table.findAll().then(result=>res.json({allDetails:result})).catch(err=>console.log(err))
}

exports.postTableDetails=async(req,res,next)=>{
    const price=req.body.selPrice
    const dish=req.body.chooseDish
    const table=req.body.selectTable

    console.log(price)

    const data= await Table.create({
        price:price,
        dish:dish,
        table:table
    })

    res.status(201).json({getData:data})
}

exports.postDeleteDetails=(req,res,next)=>{
  const tableId=req.params.uid

  console.log(tableId)

  Table.findByPk(tableId).then(details=>{
    details.destroy()
  }).catch(err=>{console.log(err)})
}