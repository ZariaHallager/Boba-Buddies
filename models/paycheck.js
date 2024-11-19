const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paycheckSchema = new Schema({
    memo: {
    type: String ,
    required: true
    },
  date: {
      type: Date,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  });

  module.exports = mongoose.model('Paycheck', paycheckSchema);