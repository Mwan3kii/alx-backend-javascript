interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: 'Mai',
  lastName: 'Yoon',
  age: 20,
  location: 'Korea'
};
  
const student2: Student = {
  firstName: 'Moses',
  lastName: 'Kuria',
  age: 40,
  location: 'Kenya'
};
  
const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  const table = document.createElement('table');

  const headerRow = document.createElement('tr');
  const headerFirstName = document.createElement('th');
  headerFirstName.textContent = 'First Name';
  const headerLocation = document.createElement('th');
  headerLocation.textContent = 'Location';
  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  table.appendChild(headerRow);

  students.forEach(student => {
    const row = document.createElement('tr');
    const FirstNameCell = document.createElement('td');
    FirstNameCell.textContent = student.firstName;
    const cellLocation = document.createElement('td');
    cellLocation.textContent = student.location;
    row.appendChild(FirstNameCell);
    row.appendChild(cellLocation);
    table.appendChild(row);
  });
  document.body.appendChild(table);
}

renderTable(studentsList);