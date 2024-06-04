const mongoose = require('mongoose');
const CONFIG = require('../config/config')

module.exports = () => {

  mongoose.connect(CONFIG.DB_URL, {}).then(() => {
  }).catch(err => console.log(err.message));

  mongoose.connection.on('connected', () => {
    console.log(`MongoDB Database connected to: ${CONFIG.DB_NAME}`,);
  });

  mongoose.connection.on('error', err => {
    console.log(err.message);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected...');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close();
  });
};
