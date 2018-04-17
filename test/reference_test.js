const assert = require('assert');
const mongoose = require('mongoose');
const User = require('../src/users');
const Comment = require('../src/comments');
const BlogBook = require('../src/blogbooks');

describe('Test de reference', ()=> {
    let user,blogBook,comment;
    beforeEach( (done) => {
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
            done()
        });
    })

    it('Test les le titre du livre d un user ', (done) => {
        User.findOne({ nom: 'Robin'}).populate('blogBooks').then((user) => {
            assert(user.blogBooks[0].title==='Mako');
            done();
        });
    });

    it('Test le commentaire du livre d un user ', (done) => {
        User.findOne({ nom: 'Robin'}).populate({
            path:'blogBooks',
            populate:{
                path: 'comment',
                model: 'comment'
            }
        }).then( (user) => {
            assert(user.blogBooks[0].comment[0].content==='chouette manga' );
            done();
        });
     }); 
}); 