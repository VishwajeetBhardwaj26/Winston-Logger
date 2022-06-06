const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const cors = require("cors");
//const connection = require("./db");
const cookieParser=require("cookie-parser"); 
const gauth=require("./routes/gauth")
const role_list=require("./middleware/role_list");
const verifyRoles=require("./middleware/roleVerify");
const verifyJWT=require("./middleware/jwtVerify")
const cart=require("./routes/cart");
// database connection
//connection();
// middlewares
app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());
// routes
app.use('/register', require('./routes/registerRoute'));
app.use('/auth', require('./routes/auth'));
app.use(verifyJWT);
app.use(verifyRoles(role_list.admin,role_list.customer),cart);
//app.use("/",gauth);
//app.use("/api/welcome",isAuthenticatedUser,logauthRoutes);
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
