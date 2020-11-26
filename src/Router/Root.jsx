import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import EmpresaPage from '../EmpresaPage';
import Login from '../Login/Login';
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

const PagesRoot = () => (
  <Router>
    <Switch>
<Route path="/" element={<EmpresaPage />}/>
<Route path="/Btn AddVeiculo" element={<BtnAddVeiculo />}/>
<Route path="/Btn RelatorioViagem" element={<BtnRelatorioViagem />}/>
<Route path="/Btn Motorista" element={<BtnMotorista />}/>
<Route path="/Btn Relatorio" element={<BtnRelatorio />}/>
<Route path="/Btn Veiculo" element={<BtnVeiculo />}/>
<Route path="/Btn Viagem" element={<BtnViagem />}/>
<Route path="/Btn CriarViagem" element={<BtnCriarViagem />}/>
<Route path="/Btn Select Motorita" element={<SelectMotorista />}/>
<Route path="/Btn AddRelatorio" element={<BtnAddRelatorio />}/>
<Route path="/Btn ViagemMotorista" element={<BtnViagemMotorista/>}/>
<Route path="/Btn AddMotorista" element={<BtnAddMotorista/>}/>
<Route path="/Btn Avisos" element={<BtnAvisos/>}/>
<Route path="/Btn AvisoME" element={<BtnAvisoME/>}/>
<Route path="/Select Viagem" element={<SelectViagem/>}/>
<Route path="/Select Motorista" element={<SelectMotorista/>}/>
<Route path="/Login" element={<Login/>}/>
    </Switch>
  </Router>
)


export default PagesRoot;