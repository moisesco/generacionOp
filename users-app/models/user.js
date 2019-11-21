const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//let es para crear una variable
let UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  editable: {
    type: Boolean,
    required: true
  }
});

//exportamos un modelo que se va a llamar User y va a usar el esquema UserSchema
module.exports = mongoose.model('User', UserSchema);
