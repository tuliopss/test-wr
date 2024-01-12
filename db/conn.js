const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://db:27017/test-wr");
  console.log("Mongo conectado!");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
