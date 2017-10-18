console.log('starting notes...');


// console.log(module);

module.exports.addNotes = function () {
  console.log('Notes added');
  return 'new Note';
};

module.exports.addNumbers = (x,y) => {
  return x+y;
};
