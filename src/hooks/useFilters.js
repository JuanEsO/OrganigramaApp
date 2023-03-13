import { useState, useContext } from 'react';
import { EmployeesContext } from '../context/EmployeesContext';

export const useFilters = () => {
    const { employees } = useContext(EmployeesContext)  // Get employees from context

    // Set initial filters
    const [filters, setFilters] = useState({
      month: 'All',
    })

    // Filter employees by month
    const filterEmployees = (employees) => {
      return employees.filter((employee) => (employee.Mes === filters.month || filters.month === 'All'))
    }
    
    const filteredEmployees = filterEmployees(employees)
  
    return {
      filteredEmployees,
      setFilters,
      filters
    }
}