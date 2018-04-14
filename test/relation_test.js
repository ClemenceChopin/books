const assert = require('assert');
const User = require('../src/users');
const Book = require('../src/books');

describe('Test de relation', ()=> {
    it('test la taille de la liste des livre d\'un utilisateur' , (done)=> {
            const user1 = new User({
                    nom : 'bob',
                    books: [
                        {title:'Game of throne'},
                        {title:'Les sentiers de l\'utopie'}
                    ]
            });
            user1.save().then(()=> User.findOne({nom:'bob'})
            .then((user) => {
                assert(user.books.length==2);
                done();
            })
         ); 
    });

    it('ajout d\'un livre a un user' , (done)=> {
        const user1 = new User({
                nom : 'bob sans livre',
        });

        user1.books.push({title:'oui oui'});

        user1.save().then(()=> User.findOne({nom:'bob sans livre'})
                .then((user) => {
                assert(user.books.length==1);
                done();
            })
        ); 
    });


    it('supression d\'un livre d\'un user' , (done)=> {
        const user1 = new User({
                nom : 'boby',
                books: [
                    {title:'Game of throne'},
                    {title:'Les sentiers de l\'utopie'}
                ]
        });

        user1.books[0].remove();
        user1.save().then(()=> User.findOne({nom:'boby'}) 
                .then((user) => {
                assert(user.books.length==1);
                done();
            })
        ); 
    });

}); 