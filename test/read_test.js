const assert = require('assert');

const book = require('../src/books');

describe('Test de read', ()=> {
    let bouquin;
    beforeEach (  (done) => {
        bouquin = new book({title:'planete chien'});
        bouquin.save().then( ()=> {
            done(); 
        });

    });
    
    it('Recherche de livre par son titre ', (done)=> {
       book.find({title:'planete chien'}).then( (bookfound)=> {
            assert(bookfound[0]._id.equals(bouquin._id));
            done();
        });
    }); 

    it('Recherche de livre par son titre ', (done)=> {
        book.findOne({title:'planete chien'}).then( (bookfound)=> {
            assert(bookfound.title=='planete chien');
            done();
        });
    }); 
});