const bodyParser = require("body-parser");
const InitiateMongoServer = require("../Backend/confige/auth");
const cors = require("cors")
const user = require("./routes/user");
const file = require("./routes/user")
const studentRoute = require('./routes/student')
const express = require("express");
let mongoose = require('mongoose');


//server called
InitiateMongoServer();

const app = express();

app.use(cors());
// PORT
const PORT = process.env.PORT || 9000;


// Middleware
app.use(bodyParser.json());

//router use
app.use("/user", user);
app.use("/image",file)


app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT`,+PORT);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students', studentRoute)


// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});



