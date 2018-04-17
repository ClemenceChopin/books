const assert = require('assert');
const mongoose = require('mongoose');
const User = require('../src/users');
const Comment = require('../src/comments');
const BlogBook = require('../src/blogbooks'); 


describe('test de middleware', () => {
    it("test que les livres sont supprimes quqnd le user est supprime", (done) => {
        user = new User({
            nom:'Robin'
        });
        blogBook = new BlogBook({
            title: 'Mako',
            summary: 'Histoire d\'un jeune serial killer'
        })

        comment = new Comment({
            content : 'chouette manga'
        })

        user.blogBooks.push(blogBook);
        blogBook.comment.push(comment); 
        comment.user = user;

        Promise.all([user.save(), blogBook.save(), comment.save()])
        .then( ()=> {
            user.remove().then( () =>{
                BlogBook.count().then( (count) => {
                    assert(count===0);
                    done();
                })
            })
        });
    })
})
