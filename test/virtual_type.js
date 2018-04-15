const assert = require('assert');
const User = require('../src/users');

describe('Test de virtual type', ()=> {
    it('Test du virtual type countBooks', (done )=> {
            const user1 = new User({
                nom:'bob',
                books:[
                    {title:'livre 1'},
                    {title:'livre 2'}
                ]
            }); 
            user1.save().then(()=> User.findOne({nom:'bob'})
            .then((user) => {
                assert(user.countBooks===2);
                done();
            })
        );   
    })
});
