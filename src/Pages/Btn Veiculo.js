import React, { Component } from 'react';

class BtnVeiculo extends Component {
    render(){
        return(
<div>
    <form>
      <div className="form-group">
        <input type="password" class="form-control" id="inputPassword" placeholder="Pesquisa de Veículo"></input>
      </div>
      <button type="submit" class="btn btn-primary">Pesquisar</button>
    </form>



    <div class="card text-center">
  <div class="card-header">
    Pesquisar Veículo
  </div>
  <div class="card-body">
 
    <a href="#" class="btn btn-primary">Add Veiculo</a>
  </div>
</div>
<a>
<button type="submit" class="btn btn-primary">Voltar</button>
</a>
  </div>

        )
    }
}

export default BtnVeiculo;