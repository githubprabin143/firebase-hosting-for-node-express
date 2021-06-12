const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const detail = new Schema({ createdAt:{type:Date,default:new Date()} });
const bookSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  author: {
    type: Schema.Types.String,
    required: true,
  },
  price: {
    type: Schema.Types.Number,
    required: true,
  },
  count:{
    type: Schema.Types.Number,
    required: true,
  },
  details:[detail]
});

module.exports = mongoose.model("book", bookSchema);
