import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees';

export const getAllEmployees = () => axios.get(API_URL);
export const createEmployee = (employeeData) => axios.post(API_URL, employeeData);
export const updateEmployee = (id, employeeData) => axios.put(`${API_URL}/${id}`, employeeData);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);

