const express = require ('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express ();
const port =5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded
    (
        {
            extended:true
        })
);

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'z_money',

});

db.connect( err =>{
    if (err) throw err;
    console.log('Connected to Mysql database');
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});

// Get all users
app.get('/users', (req, res) => {
    let sql = 'SELECT * FROM users';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
       console.log(results);
    });
});