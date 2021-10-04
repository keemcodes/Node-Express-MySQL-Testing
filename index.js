// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

const express = require('express')
const app = express()
const port = 3000

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'newuser',
  password: 'password',
  database: 'sql_hr'
})


connection.connect()

function queryLog(res) {
  connection.query('SELECT * FROM employees', function (err, results, fields) {
    if (err) throw err
  
    console.table(results)
    // results.forEach(row => {
    //   console.log(row.office_id);
    // })

    // for (let i = 0; i < results.length; i++) {
    //   console.log(results[i]);
    // }
    // console.log('The solution is: ', rows[0].solution)
    // console.log("yo")
    // rows.forEach(element => {
    //   console.log(element.employee_id + " " + element.first_name)
      
    // });
    // var list = {listResults: rows};
    // rows = 'testing';
    res.render('about', { data: results });
    // return results;
  });  
}
 

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.render('bootstrap');
})
app.get('/about', (req, res) => {
  
  // results = [];
  // results = {};
  queryLog(res);
  // results = queryLog(res);
  // console.log(tester);
  // res.write('Hello World!');
  // res.render('about', {data: results});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})