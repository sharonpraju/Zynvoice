require('dotenv').config()
const express = require("express");
const app = express();
const authRoute = require("./routes/authRoute");
const stockRoute = require("./routes/stockRoute");
const salesRoute = require("./routes/salesRoute");
const bodyParser = require("body-parser");;
const db_conn = require('./db/db_conn');
const jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//invoking mongoose connection
db_conn.connect();

app.listen(process.env.PORT)

//authentication routes
app.use(authRoute);

//middleware to check JWT
app.use( function (req, res, next) {

    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.PRIVATE_KEY, function(err, decoded) {
        if (err) {
            let response = {
                "status":"failed",
                "message":err.message,
            }
          res.status(403).send(response);
        }
        else
        {
            next();
        }
    });
});

//stock routes
app.use(stockRoute);
//sales routes
app.use(salesRoute);