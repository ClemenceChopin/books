const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const CommentShema = new Schema({
      content : {type:String}, 
      user : {
          type : Schema.Types.ObjectId,
          ref : 'user'
      }
}); 

const commentModel = mongoose.model('comment', CommentShema);

module.exports = commentModel;