const fs = require('fs');

var originalNote = {
  title: 'some title',
  body: 'Some Body'
};

var note = JSON.stringify(originalNote);
// console.log(note);
fs.writeFileSync('notes.json',note);

var readNote = fs.readFileSync('notes.json')
var note = JSON.parse(readNote)
console.log(typeof note);
console.log(note.body);
