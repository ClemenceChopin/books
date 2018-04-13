const assert = require('assert');

const book = require('../src/books');

describe('Test de delete', ()=> {
    let bouquin;
    beforeEach (  (done) => {
        bouquin = new book({title:'bob'});
        bouquin.save().then( ()=> {
            done(); 
        });

    });

    function assertDelete(promise, done){
         promise.then( () => {
             book.findOne({title:'bob '}).then( (book)  => {
                 assert(book === null);
                 done();
             });
         });
    }; 


    it('Supression de livre par son titre ', (done)=> {
        assertDelete(bouquin.remove(), done); 
    }); 

    it('Recherche de livre par son titre ', (done)=> {
        assertDelete(book.remove({title:'bob'}), done);
    }); 

    it ('recherche d un livre par son titre et remove', (done)=> {
        assertDelete(book.findOneAndRemove({title:'bob'}), done);
    });

    it ('recherche d un livre par son id et remove', (done)=> {
        assertDelete(book.findByIdAndRemove(bouquin._id), done );
    })
}); 