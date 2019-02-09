
var PouchDB = require('pouchdb')

var movies = new PouchDB('Movies');
movies
 .info()
 .then(function (info) {
   console.log(info);
 })

