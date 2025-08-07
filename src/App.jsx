// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { getAllEmployees, createEmployee, updateEmployee, deleteEmployee } from './services/api';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const { data } = await getAllEmployees();
    setEmployees(data);
  };

  const handleSave = async (employee) => {
    if (currentEmployee) {
      await updateEmployee(currentEmployee._id, employee);
    } else {
      await createEmployee(employee);
    }
    setCurrentEmployee(null);
    fetchEmployees();
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  const handleEdit = (employee) => {
    setCurrentEmployee(employee);
  };

  const handleCancel = () => {
    setCurrentEmployee(null);
  };

  return (
    <div className="App">
      <h1>Employee Management</h1>
      <EmployeeForm
        currentEmployee={currentEmployee}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      <hr />
      <h2>Employee List</h2>
      <EmployeeList
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;