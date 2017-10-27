var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yuanfang'
});
/* GET home page. */
router.post('/', function(req, res, next) {
    connection.connect();
    connection.query('SELECT * FROM wwh.wwhhenshuai', function(err, rows, fields) {
        res.setHeader('Access-Control-Allow-Origin', "*");
        res.send(rows);
    });
    connection.end();
});
module.exports = router;