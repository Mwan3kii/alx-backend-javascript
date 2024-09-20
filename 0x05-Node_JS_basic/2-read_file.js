const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    lines.shift();
    const students = {};
    lines.forEach((line) => {
      const [firstName, , , field] = line.split(',');

      if (field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      }
    });
    console.log(`Number of students: ${lines.length}`);
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const student = students[field];
        console.log(`Number of students in ${field}: ${student.length}. List: ${student.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
