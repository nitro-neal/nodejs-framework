const mongoose = require("mongoose");
const Something = require("./models/Something");

let mongoDbOptions = {
  autoIndex: true, // this makes schema index's enforced
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
};

class MongoDbClient {
  async connect() {
    let prom = new Promise((resolve, reject) => {
      mongoose.connect(process.env.MONGO_URI, mongoDbOptions).then(() => {
        console.log("Connected to mongodb");
        resolve("Success!");
      });
    });

    await prom;
  }

  async addSomething(data) {
    let something = new Something();
    something.label = data;

    await something.save();
    return something;
  }
}

exports.MongoDbClient = MongoDbClient;
