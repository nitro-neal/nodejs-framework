require("dotenv").config();

const common = require("./common/common");
const express = require("express");
const bodyParser = require("body-parser");
const { MongoDbClient } = require("./database/MongoDbClient");

const mongoDbClient = new MongoDbClient();
common.dbClient = mongoDbClient;
common.dbClient.connect();

let app = new express();

app.use(bodyParser.json({}));

app.use("/api/", require("./controllers/exampleController"));

const port = 4000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
