import { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Tag from '../Tag';
import Modal from '../EmployeeModal';
import { getUpdateStatus } from '../../services/employee';
import { EmployeesContext } from '../../context/EmployeesContext';

const Employees = ({employees}) => {
    const [modalShow, setModalShow] = useState(false);    //controla el estado del modal de empleado
    const [employeeSelected, setEmployeeSelected] = useState({});   //controla el estado del empleado seleccionado
    const { employees: totalEmployees } = useContext(EmployeesContext);    //controla el estado de la lista de empleados

    //funcion handler que se ejecuta al hacer click en un empleado, abriendo el modal de informacion extra
    const handleOnClick = (employee) => {
        setEmployeeSelected(employee);
        setModalShow(true);
    };

    return (
        <Container>
            {/* Titulos */}
            <Row className='p-3 my-3 border-bottom'>
                <Col className='d-flex' style={{alignItems: "center"}} xs="1"></Col>
                <Col className='d-flex' style={{alignItems: "center"}}>ID</Col>
                <Col className='d-flex' style={{alignItems: "center"}}>Nombre</Col>
                <Col className='d-flex' style={{alignItems: "center"}}>Sueldo Bruto</Col>
                <Col className='d-flex' style={{alignItems: "center"}}>Novedad</Col>
                <Col className='d-flex' style={{alignItems: "center"}}>Acciones</Col>
            </Row>
            {/* datos */}
            {employees.map((employee) => (
                <Row className='rounded-4 p-3 my-3 mx-1' style={{backgroundColor: "#DBE4EE"}}>
                    <Col className='d-flex' style={{alignItems: "center"}} xs="1">
                    <img
                        src="https://fastly.picsum.photos/id/317/200/200.jpg?hmac=YE2w8fnOodl9AG9z8fKPtgEXGkIwnVxXXQVC6VCLJl8"
                        className="rounded-5"
                        alt="avatar"
                        style={{width: "40px", height: "40px"}}
                    />
                    </Col>
                    <Col className='d-flex' style={{alignItems: "center"}}>{employee.ID}</Col>
                    <Col className='d-flex' style={{alignItems: "center"}}>{employee.Nombre}</Col>
                    <Col className='d-flex' style={{alignItems: "center"}}>{employee.SueldoBruto}</Col>
                    <Col className='d-flex' style={{alignItems: "center"}}>
                        <Tag>{getUpdateStatus(employee, totalEmployees)}</Tag>
                    </Col>
                    <Col className='d-flex' style={{alignItems: "center"}}>
                        <Button variant="primary" className='px-4' style={{ backgroundColor: "#054A91", border: "none" }} onClick={() => handleOnClick(employee)}>Ver</Button>
                    </Col>
                </Row>
            ))}
            <Modal
                data={employeeSelected}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>
    );
}

export default Employees;