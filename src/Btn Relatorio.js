import React, { Component } from 'react';
//import './Btn Relatorio.css';

class BtnRelatorio extends Component {
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
    Pesquisar Relatório
  </div>
  <div class="card-body">

    <a type="submit" class="btn btn-primary">Criar Relatório</a>
  </div>
</div>
<a>
<button type="submit" class="btn btn-info">Voltar</button>
</a>
  </div>

        )
    }
}

export default BtnRelatorio;