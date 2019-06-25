const fs = require('fs');

// fs.readFile('./hi', { encoding: 'utf8' }, (err, data) => {
//   if(err) return console.error(err);

//   console.log(data);
// });

const data = 'here is ralphy the damn dog!';
fs.writeFile('message.txt', data, (err) => {
  if(err) console.error(err);
  console.log('The file has been saved!');
});

