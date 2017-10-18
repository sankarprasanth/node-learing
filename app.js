console.log("starting app..");

const fs = require('fs');

const os = require('os');

var notes = require('./note.js');

var user = os.userInfo();

// fs.appendFile('readme.txt','This was initial learning of node js project', (err) =>{
//   if(err) throw err;
//   console.log('writing to file is done');
// });

// fs.appendFile('readme.txt',`\n This is ${user.username}!`, (err) =>{
//   if(err) throw err;
//   console.log('writing to file is done');
// });

console.log(notes.addNumbers(2,4));
