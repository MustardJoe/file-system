const fs = require('fs');
fs.readFile('./README.md', { encoding: 'utf8' }, (err, data) => {
  if(err) return console.error(err);

  console.log(data);
});
