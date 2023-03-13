//modal to upload data from excel file
import Modal from 'react-bootstrap/Modal';
import { useState, useContext } from 'react';
import { EmployeesContext } from '../../context/EmployeesContext';
import { useCSVReader } from 'react-papaparse';
import { processCsvDataToObjects } from '../../services/processFiles';
import Button from 'react-bootstrap/Button';

const UploadDataModal = ({ show, onHide }) => {
    const { CSVReader } = useCSVReader();   //hook para leer archivos csv
    const [file, setFile] = useState(null);  //estado para el archivo
    const { setEmployees } = useContext(EmployeesContext);   //obtiene la funcion para actualizar la lista de empleados
    const [csvData, setCsvData] = useState(null);  //estado para los datos procesados del archivo
  

    //funcion que maneja el evento de subir archivo
    const handleFileDrop = (acceptedFile) => {
        setFile(acceptedFile);
        const dataProcessed = processCsvDataToObjects(acceptedFile?.data);
        setCsvData(dataProcessed);
    };

    //funcion que maneja el evento de subir datos
    const handleUpload = () => {
        setEmployees(csvData);
        onHide();
    };

    
    return (
        <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Subir archivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <CSVReader onUploadAccepted={(results) => handleFileDrop(results)}>
            {({
                getRootProps,
                acceptedFile,
                ProgressBar,
                getRemoveFileProps,
            }) => (
                <>
                    
                    {!acceptedFile && <div {...getRootProps()}>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            className="inputfile"
                            accept=".csv"
                        />
                        <label htmlFor="file">solo archivos .csv</label>
                    </div>}
                    {acceptedFile && (
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <span className="mr-2">{acceptedFile.name}</span>
                                <button
                                    className="btn btn-danger btn-sm mx-2"
                                    {...getRemoveFileProps()}
                                >
                                    X
                                </button>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="mr-2">
                                    {acceptedFile.size} bytes
                                </span>
                                <ProgressBar />
                            </div>
                        </div>
                    )}
                </>
            )}
        </CSVReader>
        {file && (
            <Button
                onClick={handleUpload}
                className='mt-3 px-4'
            >
                Subir
            </Button>)}
            {/* {csvData && <CSVTable data={csvData} />} */}
            {/* {file && <CSVLink data={file.data}>Download me</CSVLink>} */}
        </Modal.Body>
        </Modal>
    );
}

export default UploadDataModal;