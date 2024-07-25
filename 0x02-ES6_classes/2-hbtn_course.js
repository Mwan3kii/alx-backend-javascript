export default class HolbertonCourse {
    constructor(name, length, students) {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    _validateName(name) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      return name;
    }
  
    _validateLength(length) {
      if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
      }
      return length;
    }
  
    _validateStudents(students) {
      if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      return students;
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._name = this._validateName(name);
    }
  
    get length() {
      return this._length;
    }
  
    set length(length) {
      this._length = this._validateLength(length);
    }
  
    get students() {
      return this._students;
    }
  
    set students(students) {
      this._students = this._validateStudents(students);
    }
  }