// frontend/src/components/EmployeeList.js
import React from 'react';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <ul>
      {employees.map(employee => (
        <li key={employee._id}>
          {employee.name} - {employee.position} - ${employee.salary}
          <button onClick={() => onEdit(employee)}>Edit</button>
          <button onClick={() => onDelete(employee._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;