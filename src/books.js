const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const BookShema = new Schema({
        title:String
}); 

const bookModel = mongoose.model('book', BookShema);

module.exports = bookModel;