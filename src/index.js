
var PouchDB = require('pouchdb')

var movies = new PouchDB('TestDB');
movies
 .info()
 .then(function (info) {
   console.log(info);
 })

