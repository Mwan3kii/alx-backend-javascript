const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const rows = lines.slice(1); // Remove header row
    const students = {};
    let totalStudents = 0;

    rows.forEach((row) => {
      const fields = row.split(',');

      if (fields.length >= 4) {
        const firstname = fields[0].trim();
        const field = fields[3].trim();

        if (firstname && field) {
          totalStudents += 1;

          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        }
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;