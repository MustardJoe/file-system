const fs = require('fs');
fs.readFile('./README.md', { encoding: 'utf8' }, (err, data) => {
  console.log(data);
});
