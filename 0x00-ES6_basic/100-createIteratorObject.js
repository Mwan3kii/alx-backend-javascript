export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employeesArray = [];
  for (const department in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
      employeesArray.push(...allEmployees[department]);
    }
  }
  return employeesArray[Symbol.iterator]();
}
