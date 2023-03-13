import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmployeesProvider } from './context/EmployeesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <EmployeesProvider>
    <App />
  </EmployeesProvider>
)
