const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect("mongodb+srv://admin:bngCpEMZYP40tNlb@partytime.boqrjqp.mongodb.net/?retryWrites=true&w=majority");

    console.log("Conectado ao banco🔐");
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;