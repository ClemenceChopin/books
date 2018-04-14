
const assert = require('assert');
const book = require('../src/books');

describe('Test de validation', ()=> {
    it('Un titre doit etre fourni', (done)=> {
            const bouquin = new book({title : undefined});
            const ValidationResult = bouquin.validateSync();
            const {message} = ValidationResult.errors.title;
            assert(message==='le titre est obligatoire');
            done();          
        }); 

        it('Un livre doit avoir moins de 3000 pages', (done)=> {
            const bouquin = new book({title : 'mon gros livre', TotalPages:3001});
            bouquin.validate( (validationResult) =>{
                const {message} = validationResult.errors.TotalPages;
                assert(message ==='Un livre doit avoir moins de 3000 pages');
                done();  
            })          
        });  
    })  