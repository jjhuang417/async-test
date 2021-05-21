const fs = require('fs');
const path = require('path')

const writeToFile = (data, callback) => {
  fs.writeFile(path.join(__dirname, '..', 'randomNumber/numFile.txt'), data, 'utf8', (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, 'wrote to file!');
    }
  });
};

module.exports = writeToFile;

