import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, records) => {
      if (error) reject(new Error('Cannot load the database'));
      else {
        const content = records.split('\n');
        content.splice(0, 1);
        const result = {};
        content.forEach((record) => {
          const line = record.split(',');
          if (line[3] && line[0]) {
            if (Object.keys(result).indexOf(line[3]) === -1) {
              result[line[3]] = [line[0]];
            } else {
              (result[line[3]]).push(line[0]);
            }
          }
        });
        resolve(result);
      }
    });
  });
}

export default readDatabase;