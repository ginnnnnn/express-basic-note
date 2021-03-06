const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //app.use('/',bodyParser...) it contains next() itself
app.use(express.static(path.join(__dirname, "public"))); // use public file path set for css

app.use("/admin", adminRoute); //'/add-product'=> /admin/add-product
app.use(shopRoute); //the order does matter route '/', get method take exact path

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

app.listen(3000);
