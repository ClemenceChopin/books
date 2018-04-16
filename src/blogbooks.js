const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const BlogBookShema = new Schema({
       title:{type:String}, 
       summary:{type:String},
       comment:[{type:Schema.Types.ObjectId,
                ref:'comment' 
    }]
}); 

const blogbookModel = mongoose.model('blogBook', BlogBookShema);

module.exports = blogbookModel;