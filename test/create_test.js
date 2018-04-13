const assert = require('assert');

const book = require('../src/books');

describe('Test de create', ()=> {
it('Sauvegarde d\'un livre', (done )=> {
            const bouquin = new book({title : "planete chien"});
            bouquin.save().then( ()=> {
            assert(!bouquin.isNew);
            done();
        }); 
    })
}); 