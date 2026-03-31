const app = require("./src/app");
const connectDB = require("./src/db/db");
require("dotenv").config(); //Very Imp for Keeping MongoDB Cluster Safe

connectDB();
app.listen(3000, () => console.log("server started"));
