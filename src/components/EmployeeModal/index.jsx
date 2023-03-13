import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal({ data, ...props }) {

    //componente que renderiza una propiedad con su valor en una fila
    const InfoRow = ({ label, value }) => (
        <div className='d-flex justify-content-between my-2 fs-5'>
            {label}: <span className='fw-light'>{value}</span>
        </div>
    )

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {data.Nombre}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container className='d-flex justify-content-center align-items-center flex-column'>
                {/* avatar */}
                <img
                    src="https://fastly.picsum.photos/id/317/200/200.jpg?hmac=YE2w8fnOodl9AG9z8fKPtgEXGkIwnVxXXQVC6VCLJl8"
                    alt="avatar"
                    style={{width: "150px", height: "150px", borderRadius: "50%"}}
                />
                {/* info */}
                <div className='mt-5' style={{width: "50%"}}>
                    <InfoRow label='ID' value={data.ID} />
                    <InfoRow label='Fecha de ingreso' value={data.FechaIngreso} />
                    <InfoRow label='Area' value={data.Area} />
                    <InfoRow label='División' value={data.División} />
                    <InfoRow label='Subarea' value={data.Subarea} />
                    <InfoRow label='ID Lider' value={data.IDLider} />
                    <InfoRow label='Nivel Jerárquico' value={data.Seniority} />
                </div>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;