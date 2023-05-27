const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose
      .connect(process.env.DB_CONNECTION, {
        autoIndex: true,
      })
      .then(() => {
        console.log("DB Online");
      });
  } catch (error) {
    console.log(error);
    throw new Error("Error al conectar con la base de datos");
  }
};

module.exports = { dbConnection };
