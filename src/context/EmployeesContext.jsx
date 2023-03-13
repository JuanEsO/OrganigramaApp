import { useState } from 'react';
import { createContext } from 'react';

export const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    return (
        <EmployeesContext.Provider value={{ employees, setEmployees }}>
            {children}
        </EmployeesContext.Provider>
    );
}