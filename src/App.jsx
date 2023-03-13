import Container from 'react-bootstrap/Container';
import Employees from './components/Employees';
import Filters from './components/Filters';
import { useFilters } from './hooks/useFilters';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import UploadDataModal from './components/UploadDataModal';
import { EmployeesContext } from './context/EmployeesContext';
import { useContext, useState } from 'react';
import NoData from './components/NoData';

function App() {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);          //controla el estado del modal de subir datos
  const { filteredEmployees, setFilters, filters } = useFilters()       //controla el estado de los filtros
  const { employees } = useContext(EmployeesContext)                  //controla el estado de la lista de empleados

  //componente que renderiza la tabla de empleados
  const EmployeesTable = () => (
    <Container className='my-5'>
        <Filters onChange={setFilters} />
        <Employees employees={filteredEmployees} />
        <Footer filters={filters} employees={filteredEmployees} />
    </Container>
  )

  return (
    <>
      <NavBar onUpload={() => setUploadModalOpen(true)} />
      <Container>
          {employees?.length > 0 ? <EmployeesTable /> : <NoData />}
      </Container>
      <UploadDataModal show={uploadModalOpen} onHide={() => setUploadModalOpen(false)}/>
    </>
  )
}

export default App
