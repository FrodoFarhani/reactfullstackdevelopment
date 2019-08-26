const mongoose = require('mongoose');
//const Schema=mongoose.Schema; OR...
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});
// mongoose.model('collectionName',SchemaName)
mongoose.model('users', userSchema);
