console.log("starting app..");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

var notes = require('./note.js');

// var command = process.argv[2];
var command = yargs.argv._[0];
const argv = yargs.argv;
console.log(argv);
// console.log(command);
if(command === 'add'){
  notes.addNotes(argv['title']);
}else if (command == 'remove') {
    notes.removeNotes(argv['title']);
}else{
  console.log('unknown command');
}
