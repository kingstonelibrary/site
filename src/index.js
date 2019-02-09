
var PouchDB = require('pouchdb')

var test = new PouchDB('TestDB');
test
 .info()
 .then(function (info) {
   console.log(info);
 })

