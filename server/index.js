const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const cors = require("cors");
const connection = require("./db");
const { isAuthenticatedUser } = require("./middleware/logauth");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const logauthRoutes=require("./routes/welcome");
const cookieParser=require("cookie-parser");
const gauth=require("./routes/gauth")
// database connection
connection();
// middlewares
app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());
// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/",gauth);
app.use("/api/welcome",isAuthenticatedUser,logauthRoutes);
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
