const mongoose = require('mongoose');

const port = '27017';

mongoose.connect(
  `mongodb://localhost:${port}/stringList`,
  { useNewUrlParser: true },
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log(`MongoDB is connected on port ${port}`);
});

module.exports = mongoose;
