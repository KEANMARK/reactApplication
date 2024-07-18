// src/Student.jsx
import React from "react";

const Student = ({ number, name, department, finalGrade, status }) => {
  return (
    <tr className={status === "Pass" ? "pass" : "fail"}>
      <td>{number}</td>
      <td>{name}</td>
      <td>{department}</td>
      <td>{status === "Pass" ? finalGrade : "-"}</td>
      <td>{status}</td>
    </tr>
  );
};

export default Student;
