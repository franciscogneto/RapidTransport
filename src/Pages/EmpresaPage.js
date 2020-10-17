import React, { useState } from "react";
import styled from "styled-components";

const theme = {
 
  blue: {
    default: "#00008B",
  }
};

const Button = styled.button`
  align-items: center;
  width: 200px;
  background-color: ${props => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 50px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${props => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export default function EmpresaPage() {
  return (
    <div>

        <Button type="submit" theme="blue"> Motorista </Button>

        <Button type="submit" theme="blue"> Viagem </Button>

        <Button type="submit" theme="blue"> Relatório </Button>
        
        <Button type="submit" theme="blue"> Avisos </Button>

        <Button type="submit" theme="blue"> Veículos </Button>

        <Button type="submit"theme="blue"> Sair </Button>



      </div>

  );
}




