// 3-read_file_async.js

const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter(line => line.trim() !== '');

      // Remove the header (first line)
      const header = lines.shift();

      const studentsByField = {};

      lines.forEach(line => {
        const [firstName, , , field] = line.split(',');

        if (field) {
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstName);
        }
      });

      // Log total number of students
      console.log(`Number of students: ${lines.length}`);

      // Log each field with number of students and names
      for (const field in studentsByField) {
        const students = studentsByField[field];
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
    })
    .catch((error) => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
