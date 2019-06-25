const fs = require('fs');
const { join } = require('path');
// fs.readFile('./hi', { encoding: 'utf8' }, (err, data) => {
//   if(err) return console.error(err);

//   console.log(data);
// });

// const data = 'here is ralphy the damn dog!';
// fs.writeFile('message.txt', data, (err) => {
//   if(err) console.error(err);

//   fs.readFile('./message.txt', { encoding: 'utf8' }, (err, data) => {
//     if(err) return console.error(err);

//     console.log(data);
//   });

// });
fs.readFile(('./message.txt'), { encoding: 'utf8' }, (err, data) => {
  if(err) return console.error(err);
  console.log(data);

  fs.writeFile(('message2.txt'), data, (err) => {
    if(err) return console.error(err);

  });
});
