const mongoose = require("mongoose");

const connectionString = ''

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const connectDb = (url) => {
  return mongoose.connect(url, mongooseOptions);
};

module.exports = connectDb;
