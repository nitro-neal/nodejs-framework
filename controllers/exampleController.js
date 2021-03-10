const common = require("../common/common");
const express = require("express");
const { ExampleService } = require("../services/ExampleService");
const exampleController = express.Router();
const dbClient = common.dbClient;

let exampleService = new ExampleService();

exampleController.get("/do-something", async function (req, res) {
  let data = await exampleService.doSomething();
  await dbClient.addSomething(data);
  res.json({ response: "sucess" });
});

module.exports = exampleController;
