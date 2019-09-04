const mongoose = require('mongoose');
//const Schema=mongoose.Schema; OR...
const { Schema } = mongoose;

const surveySchema = new Schema({
  titel: String,
  subject: String,
  body: String
});
// mongoose.model('collectionName',SchemaName)
mongoose.model('survey', surveySchema);
