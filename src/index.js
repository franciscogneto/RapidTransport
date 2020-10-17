import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import EmpresaPage from './Pages/EmpresaPage';
import BtnAddVeiculo from './Pages/Btn AddVeiculo';
import BtnRelatorioViagem from './Pages/Btn RelatorioViagem';
import BtnMotorista from './Pages/Btn Motorista';
import BtnRelatorio from './Pages/Btn Relatorio';
import BtnVeiculo from './Pages/Btn Veiculo';
import BtnCriarViagem from './Pages/Btn CriarViagem';
import SelectMotorista from './Pages/Select Motorista';
import BtnAddRelatorio from './Pages/Btn AddRelatorio';
import BtnViagemMotorista from './Pages/Btn ViagemMotorista';
import BtnAddMotorista from './Pages/Btn AddMotorista';



ReactDOM.render(
  <React.StrictMode>
  
    <App/>
   
  </React.StrictMode>,
  document.getElementById('root')
);