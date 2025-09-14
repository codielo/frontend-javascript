// index.ts

// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students using the interface
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Williams",
  age: 23,
  location: "San Francisco",
};

// 3. Create an array of students
const studentsList: Student[] = [student1, student2];

/**
 * Renders an HTML table from an array of Student objects.
 * @param students The array of students to display.
 */
function renderStudentsTable(students: Student[]): void {
  const tableBody = document.getElementById("students-table-body");

  // Check if the table body element exists
  if (!tableBody) {
    console.error("Table body element not found!");
    return;
  }

  // 4. Iterate over the students and create a new table row for each
  students.forEach((student) => {
    const row = tableBody.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
}

// 5. Render the table once the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  renderStudentsTable(studentsList);
});
