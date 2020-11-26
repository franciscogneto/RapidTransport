import React from "react";
import styled from "styled-components";
import BtnMotorista from './Btn Motorista';
import BtnRelatorio from './Btn Relatorio';
import BtnViagem from './Btn Viagem';
import BtnAvisos from './Btn Avisos';
import BtnVeiculo from './Btn Veiculo';
import BtnAddVeiculo from "./Btn AddVeiculo";
//import Switch from "react-switch";


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
    <div className="Empresa">

        <a href = "./BtnMotorista.js">
        <Button onClick={() => ('/Btn Motorista')}> Motorista </Button>
        </a>
  
        <a href = "./BtnCriarViagem.js">
        <Button onClick={() => ('/Btn CriarViagem')}> Viagem </Button>
        </a>

        <a href = "./BtnRelatorio.js">
        <Button onClick={() => ('/Btn Relatorio')}>Relatório </Button>
        </a>

        <a href = "./BtnAvisos.js">
        <Button onClick={() => ('/Btn Avisos')}> Avisos </Button>
        </a>

        <a href = "./BtnVeiculo.js">
        <Button onClick={() => ('/Btn Veiculo')}> Veículos </Button>
        </a>

      <a href = "./Login.js">
        <Button onClick={() => ('/Login')}> Sair </Button>
      </a>

      </div>
  );
}





