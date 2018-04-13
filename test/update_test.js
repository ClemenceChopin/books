const assert = require('assert');

const book = require('../src/books');

describe('Test d\'update ', ()=> {
    let bouquin;
    let NewTitle = 'Game of throne';
    
    beforeEach (  (done) => {
        bouquin = new book({title:'planete chien'});
        bouquin.save().then( ()=> {
            done(); 
        });
    });

    function assertTitle(promise,done){
         promise.then( ()=> {
            book.find({}).then(  (book) => { 
                assert(book[0].title===NewTitle);
                done();
            });
        });
    };

    it ('Update depuis l\'instance', (done)=> {
        bouquin.set('title',NewTitle); 
        assertTitle(bouquin.save(), done);
    })

    it ('Update depuis le modele', (done)=> {
       assertTitle(book.update({title:'planete chien'}, {title:NewTitle}), done);
    })

    it ('recherche d un livre par son titre et update', (done)=> {
        assertTitle(book.findOneAndUpdate({title:'planete chien'}, {title:NewTitle}), done);
    })

    it ('recherche d un livre par son id et update', (done)=> {
        assertTitle(book.findByIdAndUpdate(bouquin._id, {title:NewTitle}), done );
    })

    it ('recherche d un livre et incremente son nombre de pages', (done)=> {
         book.update({title:"planete chien"}, {$inc: {TotalPages:3}})
         .then( ()=> book.findOne({title:"planete chien"}))
         .then( book => { 
             assert(book.TotalPages===3);
             done();
         });
    });
});