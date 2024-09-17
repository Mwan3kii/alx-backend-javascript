import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const filepath = process.argv.length > 2 ? process.argv[2] : '';
      const records = await readDatabase(filepath);
      const fields = Object.keys(records);
      fields.sort((x, y) => {
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
      });
      res.statusCode = 200;
      res.write('This is the list of our students\n');
      for (const field of fields) {
        res.write(`Number of students in ${field}: ${records[field].length}. List: ${records[field].join(', ')}`);
        if (fields.indexOf(field) !== fields.length - 1) res.write('\n');
      }
    } catch (error) {
      res.statusCode = 500;
      res.write(err.message);
    }
    res.end();
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (['CS', 'SWE'].indexOf(major.toUpperCase()) === -1) {
      res.statusCode = 500;
      res.send('Major parameter must be CS or SWE');
    } else {
      const filepath = process.argv.length > 2 ? process.argv[2] : '';
      try {
        const records = await readDatabase(filepath);
        res.statusCode = 200;
        res.write(`List: ${records[major.toUpperCase()].join(', ')}`);
      } catch (error) {
        res.statusCode = 500;
        res.write(error.message);
      }
      res.end();
    }
  }
}

export default StudentsController;