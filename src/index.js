import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import EmpresaPage from './EmpresaPage';
import BtnAddVeiculo from './Btn AddVeiculo';
import BtnRelatorioViagem from './Btn RelatorioViagem';
import BtnMotorista from './Btn Motorista';
import BtnRelatorio from './Btn Relatorio';
import BtnVeiculo from './Btn Veiculo';
import BtnViagem from './Btn Viagem';
import BtnCriarViagem from './Btn CriarViagem';
import SelectMotorista from './Select Motorista';
import BtnAddRelatorio from './Btn AddRelatorio';
import BtnViagemMotorista from './Btn ViagemMotorista';
import BtnAddMotorista from './Btn AddMotorista';
import BtnAvisos from './Btn Avisos';
import BtnAvisoME from './Btn AvisoME';
import SelectViagem from './Select Viagem';
import App from './Login';



ReactDOM.render(
  <React.StrictMode>
  
    <EmpresaPage/>
   
  </React.StrictMode>,
  document.getElementById('root')
);