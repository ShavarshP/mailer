const mysql=require('mysql')

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
  console.log('maladec');
});
module.exports= Dtb  =(sql, n, e, p)=>{

  Db.query(sql, (err, result)=>{
    if(err) throw err;
    console.log(result);
    if (result.length==0) {
      const sqlt = "INSERT INTO users ( `NAME`, `EMAILADDRESS`, `PASSWORD`) VALUES ( '"+n+"','"+e+"','"+p+"')"
      Dtb(sqlt)
    }
    return result


  })
}
