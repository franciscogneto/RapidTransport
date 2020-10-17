import React, { Component } from 'react';

class BtnRelatorio extends Component {
    render(){
        return(
<div>
    <form>
      <div className="form-group">
        <input type="password" class="form-control" id="inputPassword" placeholder="Pesquisa de Relatório"></input>
      </div>
    </form>



    <div class="card text-center">
  <div class="card-header">
    Pesquisar Relatório
  </div>
  <div class="card-body">



    
 
    <a href="#" class="btn btn-primary">Criar Relatório</a>
  </div>
</div>
<a>
<button type="submit" class="btn btn-primary">Voltar</button>
</a>
  </div>

        )
    }
}

export default BtnRelatorio;