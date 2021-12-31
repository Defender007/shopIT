const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `mongoDB database connected with HOST: ${con.connection.host}`
      );
    })
    .catch((err) => {
      //... Handled Unhandled Promise rejections caused by database connection here...
      //...as against the tutorial module5-5
      console.log("Could not connect to MongoDB...", err.message);
      console.log("Shutting down the Server");

      process.exit(1);
    });
};

module.exports = connectDatabase;
