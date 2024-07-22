export default function createIteratorObject(report) {
    const { allEmployees } = report;
    const employeesArray = [];
    for (const department in allEmployees) {
      employeesArray.push(...allEmployees[department]);
    }
    return employeesArray[Symbol.iterator]();
  }