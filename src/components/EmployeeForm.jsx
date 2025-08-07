import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ currentEmployee, onSave, onCancel }) => 
{
 const [employee,setEmployee] = useState({
  name: '',
  position: '',
  salary: ''
 });


 useEffect(() => {
  if (employee) {
    setEmployee({
      name: employee.name || '',
      position: employee.position || '',
      salary: employee.salary || ''
    });
  }
 }, [currentEmployee]);
const handleChange = (e) => 
{
    const { name, value } = e.target;
    setEmployee({...employee, [name]: value});
}
const handleSubmit = (e) => 
{
    e.preventDefault();
    onSave(employee);
    setEmployee({ name: '', position: '', salary: '' });
}
return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        type="number"
        name="salary"
        value={employee.salary}
        onChange={handleChange}
        placeholder="Salary"
        required
      />
      <button type="submit">
        {currentEmployee ? 'Update Employee' : 'Add Employee'}
      </button>
      {currentEmployee && <button onClick={onCancel}>Cancel</button>}
    </form>
)
};


export default EmployeeForm;