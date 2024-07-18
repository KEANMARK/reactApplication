// Students.jsx
import React from "react";
import Student from "./Student";

const Students = () => {
  const students = [
    { name: "Alice", department: "Science", finalGrade: 95, status: "Pass" },
    { name: "Bob", department: "Arts", finalGrade: 82, status: "Pass" },
    { name: "Charlie", department: "Commerce", finalGrade: 75, status: "Pass" },
    { name: "David", department: "Science", finalGrade: 68, status: "Pass" },
    { name: "Emma", department: "Commerce", finalGrade: 79, status: "Pass" },
    { name: "Frank", department: "Arts", status: "Fail" },
    { name: "Grace", department: "Science", finalGrade: 72, status: "Pass" },
    { name: "Henry", department: "Commerce", finalGrade: 88, status: "Pass" },
    { name: "Ivy", department: "Arts", finalGrade: 91, status: "Pass" },
    { name: "Jack", department: "Science", status: "Fail" },
    // ... other student data
  ];

  return (
    <div className="container">
      <h2>Students List</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Name</th>
            <th>Department</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student key={index} number={index + 1} {...student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
