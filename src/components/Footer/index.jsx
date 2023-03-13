import { useContext } from 'react'
import { EmployeesContext } from '../../context/EmployeesContext'
const Footer = ({ filters, employees }) => {

    //funcion que calcula el total de la nomina
    const getTotalNomina = () => {
        const total = employees.reduce((acc, employee) => {
            return Number(acc) + Number(employee.SueldoBruto)
        }, 0)
        return total
    };

    return(
        <div className='mx-3'>
            {filters?.month !== 'All' && <span className='fw-light'>Total nomina mes: ${getTotalNomina()}</span>}
        </div>
    )
}

export default Footer