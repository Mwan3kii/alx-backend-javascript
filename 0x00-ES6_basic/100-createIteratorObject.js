export default function createIteratorObject(report) {
  let employeeArray = [];
  for (const value of Object.values(report.allEmployees)) {
    employeeArray = [...employeeArray, ...value];
  }
  return employeeArray;
}
