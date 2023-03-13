import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { EmployeesContext } from '../../context/EmployeesContext';


function NavBar({ onUpload }) {
    const { employees } = useContext(EmployeesContext);   //obtiene la lista de empleados

    //funcion que controla si se imprime o se abre el modal de subir datos
    const handleOnClick = () => {
        if (employees.length > 0) {
            window.print();
        } else {
            onUpload();
        }
    };

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Organigrama
            </Navbar.Brand>
            <Button
                variant="primary"
                className='px-4'
                style={{ backgroundColor: "#054A91", border: "none" }}
                size="sm"
                onClick={handleOnClick}
            >{employees.length > 0 ? "Imprimir" : "Subir Datos"}</Button>
        </Container>
        </Navbar>
    )
}

export default NavBar