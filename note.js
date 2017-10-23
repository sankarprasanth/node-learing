console.log('starting notes...');


// // console.log(module);
//
// module.exports.addNotes = function () {
//   console.log('Notes added');
//   return 'new Note';
// };
//
// module.exports.addNumbers = (x,y) => {
//   return x+y;
// };
var addNotes = (title)=>{
    console.log('adding notes',title);
}

var removeNotes = (title)=>{
    console.log('removing notes',title);
}

module.exports = {
  addNotes,
  removeNotes
}
