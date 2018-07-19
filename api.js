var mysql = require('mysql');

// var client = mysql.createClient();
// client.host='207.154.209.20';
// client.port= '22';
// client.user='tishkunov';
// client.password='uokey@123!';
// client.database='boot';
// const http = require('http')
// const port = 3000
// const requestHandler = (request, response) => {
//     console.log(request.url)
//     response.end('Hello Node.js Server!')
// }
// const server = http.createServer()
// server.listen(port, (err) => {
//     if (err) {
//         return console.log('something bad happened', err)
//     }
//     console.log(`server is listening on ${port}`)
// })

// var node_ssh = require('node-ssh');
// var ssh = new node_ssh();
 
// ssh.connect({
//   host: 'localhost',
//   username: 'steel',
//   privateKey: '/priv.ppk'
// })


// var query = connection.query('SELECT * FROM example;', connection.user, function(err, result) {
//   console.log(err);
//   console.log(result);
// });

const mysqlssh = require('mysql-ssh');
const fs = require('fs');
var express = require('express');
var app = express(); 
// mysqlssh.connect(
//     {
//         host: '207.154.209.20',
//         user: 'root',
//         privateKey: fs.readFileSync('priv.ppk'),
//         passphrase: 'uokey@123!'
//     },
//     {
//         host: 'localhost',
//         user: 'tishkunov',
//         password: 'uokey@123!',
//         database: 'boot'
//     }
// )
// .then(client => {
//     client.query('SELECT * FROM `example`', function (err, results, fields) {
//         if (err) throw err
//         console.log(results);
//         mysqlssh.close()
//     })
// })
// .catch(err => {
//     console.log(err)
// });




app.get('/listUsers', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//        console.log( data );
//        res.end( data );
//    });
   mysqlssh.connect(
	    {
	        host: '207.154.209.20',
	        user: 'root',
	        privateKey: fs.readFileSync('priv.ppk'),
	        passphrase: 'uokey@123!'
	    },
	    {
	        host: 'localhost',
	        user: 'tishkunov',
	        password: 'uokey@123!',
	        database: 'boot'
	    }
	)
	.then(client => {
	    client.query('SELECT * FROM `example`', function (err, results, fields) {
	        if (err) throw err
	        res.end(results);
	        mysqlssh.close()
	    })
	})
	.catch(err => {
	    console.log(err)
	});
})

var server = app.listen(22, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
