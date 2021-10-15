const express = require("express");
const path = require("path");
const methodOverride = require('method-override');
const app = express();
const session = require("express-session");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const cors = require("cors")

// App Server
app.set("port",process.env.PORT || 3001);
app.listen(app.get("port"),() => console.log("Server Start http://localhost:" + app.get("port")));

// App Access Public
app.use(express.static(path.resolve(__dirname, "../public")));

// App Settings (View Engine)
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

// App Middlewares
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(cors());
app.use(session({secret: "Secreto", resave: false, saveUninitialized: false}));
app.use(userLoggedMiddleware);

// App Routes
const home = require("./routes/home");
app.use(home);

const product = require("./routes/product");
app.use("/product", product);    

const user = require("./routes/user");
app.use("/user", user);

// API routes

const productApi = require("./routes/api/productApi");
app.use("/productApi", productApi);

const userApi = require("./routes/api/userApi");
app.use("/userApi", userApi);











