const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stringList');

module.exports = mongoose;