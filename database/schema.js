const mongoose = require('./index');

const Schema = mongoose.Schema;

const listSchema = new Schema({
  search_term: String,
});

const List = mongoose.model('List', listSchema);

module.exports = List;