const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const BookShema = new Schema({
        title: {type:String, required:[true,'le titre est obligatoire']},
        TotalPages:{
                type:Number, 
                default:0,
                validate: {
                        validator : (TotalPages) => TotalPages < 3000,
                        message : 'Un livre doit avoir moins de 3000 pages'
                }
        }
}); 

const bookModel = mongoose.model('book', BookShema);

module.exports = bookModel;