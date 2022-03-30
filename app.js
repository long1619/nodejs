const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
var flash = require('connect-flash');
//
var session = require('express-session');

// khởi động app
const app = express();
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ extname: ".hbs" });
// TEMPLATE ENGINE
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
// khởi động bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//khởi động methodOverride
app.use(methodOverride("_method"));
// config db
const db = require("./config/db");
db.connect(); // connect là tù file db export ra

//
// app.use(flash());
// 
// app.use(session({ cookie: { maxAge: 60000 }, 
//     secret: 'woot',
//     resave: false, 
//     saveUninitialized: false}));
// app.get("/about", (req, res) => res.render("about"));
//
const route = require("./routers/index"); // route
route(app); // biến app truyền từ file route

// const posts = require("./routers/posts"); //---router------
//const index = require("./routers/index"); //---router------
// app.use("/posts", posts); // cái đầu tiên là mọi đường dẫn post sẽ chạy vào
// app.use("/", index);
// khởi động express middleware
app.use(express.json());
const PORT = 5000;
app.listen(PORT, () => console.log(` http://localhost: ${PORT}`));
