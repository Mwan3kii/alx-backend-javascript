// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and filter out empty ones
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Remove the header (first line) if present
    const header = lines.shift();

    // Create an object to store students by their field
    const studentsByField = {};

    // Parse each line and categorize students by field
    lines.forEach(line => {
      const [firstName, , , field] = line.split(',');

      if (field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      }
    });

    // Log the total number of students
    console.log(`Number of students: ${lines.length}`);

    // Log the number of students per field and their first names
    for (const field in studentsByField) {
      const students = studentsByField[field];
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
