import React, { Component } from 'react';

class BtnMotorista extends Component {
    render(){
        return(
<div>
    <form>
      <div className="form-group">
        <input type="password" class="form-control" id="inputPassword" placeholder="Pesquisa de Motorista"></input>
      </div>
      <button type="submit" class="btn btn-primary">Pesquisar</button>
    </form>



    <div class="card text-center">
  <div class="card-header">
    Pesquisar Motorista
  </div>
  <div class="card-body">
 
    <a href="#" class="btn btn-primary">Add Motorista</a>
  </div>
</div>
<a>
<button type="submit" class="btn btn-primary">Voltar</button>
</a>
  </div>

        )
    }
}

export default BtnMotorista;