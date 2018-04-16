const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done) =>{
//mongoose.connect('mongodb://localhost/books');
    mongoose.connect('mongodb://altima:altima@ds046067.mlab.com:46067/arkea');

    mongoose.connection
        .once('open', () => 
    {
        console.log('connexion etablie'); done();
    })
        .on('error', (error) =>
    {
        console.error('Echec de la connexion \\n', error)
    })
});

beforeEach("Supprime les donnees",(done) =>{
    mongoose.connection.db.dropDatabase().then( () => { 
    done();
    })
});

