import React, { Component } from 'react';
import styled from "styled-components";
//import './Btn RelatorioViagem.css';

const form = styled.form`

  margin-left: 7000px;
`;

class BtnRelatorioViagem extends Component {
    render(){
        return(
<div>
    <form>
      <div className="form-group">
        <input type="text" class="form-control" id="inputtext" placeholder="Pesquisa de Relatório"></input>
      </div>
      <button type="submit" class="btn btn-primary rounded mx-auto d-block">Pesquisar</button>
    </form>


    <div class="card text-center">
  <div class="card-header">
    Pesquisa de seus Relatórios
  </div>
  <div class="card-body">
 
    <a type="submit" class="btn btn-primary">Add Relatório</a>
  </div>
</div>
<a>
<button type="submit" class="btn btn-info">Voltar</button>
</a>
  </div>

        )
    }
}

export default BtnRelatorioViagem;
