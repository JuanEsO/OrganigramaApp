import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useContext } from 'react';
import { EmployeesContext } from '../../context/EmployeesContext';

const Filters = ({ onChange }) => {
    const { employees } = useContext(EmployeesContext);   //obtiene la lista de empleados
    const [selectedMonth, setSelectedMonth] = useState('All');   //estado que controla el mes seleccionado

    //lista de meses
    const monthsList = [
        'All',
        ...new Set(employees.map((employee) => employee.Mes)),
    ]

    //funcion que se ejecuta cuando se selecciona un mes
    const handleOnChange = (e) => {
        setSelectedMonth(e.target.innerText);
        onChange(prev => ({...prev, month: e.target.innerText}));
    }

    
    return (
        <div className="mx-3">
            <div className="d-flex w-100 justify-content-end">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {selectedMonth}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {monthsList.map((month) => (
                                <Dropdown.Item onClick={handleOnChange}>{month}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                     </Dropdown>
            </div>
        </div>
    )
}
export default Filters