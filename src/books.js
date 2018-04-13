const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const BookShema = new Schema({
        title: {type:String, required:[true,'le titre est obligatoire']},
        TotalPages:{type:Number, default:0}
}); 

const bookModel = mongoose.model('book', BookShema);

module.exports = bookModel;