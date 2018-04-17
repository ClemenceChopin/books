const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const bookSchema = require('./books').schema; 
const BlogBook = require('./blogbooks');

const UserShema = new Schema({
        nom: String,
        books : [bookSchema],
        blogBooks : [{
            type:Schema.Types.ObjectId,
            ref : 'blogBook'
        }]
}); 

UserShema.virtual('countBooks').get(function(){
    return this.books.length;
});

UserShema.pre('remove',function (next) {
    BlogBook.remove({_id: {$in: this.blogBooks}}).then( ()=> {
        next ();
    });
});


const userModel = mongoose.model('user', UserShema);

module.exports = userModel;
