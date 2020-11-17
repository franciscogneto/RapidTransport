import React from "react";
import styled from "styled-components";

import App from './Login.js';
import BtnMotorista from './Btn Motorista';
import BtnRelatorio from './Btn Relatorio';
import BtnViagem from './Btn Viagem';
import BtnAvisos from './Btn Avisos';
import BtnVeiculo from './Btn Veiculo';
import { BrowserRouter as Router,Route,Link} from "react-router-dom";


const Button = styled.button`
  width: 300px;
  background-color: #00008B;
  color: white;
  padding: 20px 25px;
  border-radius: 50px;
  text-transform: uppercase;

  margin-left: 360px;
  margin-right: 70px;
  margin-top: 180px;

`;


export default function EmpresaPage() {
  

  return (
    <div>
<Router>

        <Button onClick={() => ('./Btn Motorista')}> Motorista </Button>
  
        <Button onClick={() => ('./Btn CriarViagem')}> Viagem </Button>

        <Button onClick={() => ('./Btn Relatorio')}>Relatório </Button>

        <Button onClick={() => ('./Btn Avisos')}> Avisos </Button>

        <Button onClick={() => ("./Btn Veiculo")}> Veículos </Button>
      
        <Button> <Link to={"./Login"}> Sair </Link> </Button>

</Router>

      </div>


  );
}





