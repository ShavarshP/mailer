const { Router } = require('express')
const router = Router()
const bcrypt = require( 'bcrypt' );
const mongoose = require('mongoose')
const mongoClient = require('mongodb')
const mysql=require('mysql')

const SchemaJoi=require('./joiValidation')
const Dtb=require('./sql')
const Dtbt=require('./sql')


const Db=mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'root',
  database : 'test'
});
Db.connect((err)=>{
  if(err){
    throw err;
  }

});
// const isMach=await bcrypt.compare( 'smbuk1', newpassword)
// console.log(isMach);
router.post('/customers', async (req, res)=> {
    console.log(req.body);

    try {
        const value = await SchemaJoi.validateAsync(req.body);

        const newpassword=await bcrypt.hash( req.body.password, 10)
        const sqlF="SELECT `PASSWORD` FROM users WHERE EMAILADDRESS='"+req.body.email+"'"
        Dtb(sqlF, req.body.name, req.body.email, req.body.password)


    }
    catch (err) {
      res.status(500).send('Something broke!')
  }

});

router.post('/login', async (req, res)=> {
    console.log('req.body');
    const data={name:''}
    const sql="SELECT `NAME` FROM `users` WHERE EMAILADDRESS='"+req.body.email+"' AND PASSWORD='"+req.body.password+"'"


    Db.query(sql, (err, result)=>{
      if(err) throw err;
      console.log(result[0].NAME);
      res.status(200).send(JSON.stringify(result))

    })


});



module.exports = router
