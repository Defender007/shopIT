const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      
    })
    .then((con) => {
      console.log(
        `mongoDB database connected with HOST: ${con.connection.host}`
      );
    }).catch(err => console.log("Could not connect to MongoDB...", err));
};

module.exports = connectDatabase;
