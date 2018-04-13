
const assert = require('assert');
const book = require('../src/books');

describe('Test de validation', ()=> {
    it('Un titre doit etre fourni', (done)=> {
            const bouquin = new book({title : 'undefined'});
            //const ValidationResult = bouquin.validateSync();
            //const {message} = ValidationResult.error.title;
           // assert(Message==='le titre est obligatoire');
           // done();          
            bouquin.validate( (validateInfo) =>{
                assert(validateInfo === null);
                if(validateInfo != null) {
                    assert(validateInfo.message ==='le titre est obligatoire');
                }
                done();  
            })
        }); 
    })  