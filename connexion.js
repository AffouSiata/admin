let mysql = require('mysql');
let connect = mysql.createConnection({
   host:'192.168.64.2',
   user: 'Affou',
   password:'12345',
   database:'test'
});

module.exports=connect;