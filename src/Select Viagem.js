import React, { Component } from 'react';
//import './Select Viagem.css';

class SelectViagem extends Component {
    render(){
        return(
<div>
    <form>

    <div class="card text-center">
  <div class="card-header">
    Motorista
  </div>
  <div class="card-body">

      <div>Status da Viagem</div>

  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="opcao1"></input>
  <label class="form-check-label" for="inlineRadio1">Parado</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="opcao2"></input>
  <label class="form-check-label" for="inlineRadio2">Viajando</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="opcao3"></input>
  <label class="form-check-label" for="inlineRadio2">Aguardando Viagem</label>
</div>

<div class="card-body">
 
 <a type="submit" class="btn btn-primary">Veiculo</a>
 <a type="submit" class="btn btn-primary">Motorista</a>
 <a type="submit" class="btn btn-danger">Relatório</a>
 <a type="submit" class="btn btn-primary">Alterar</a>
</div>

  </div>
</div>

<b>
<button type="submit" class="btn btn-success">Menu</button>
<button type="submit" class="btn btn-info">Voltar</button>
</b>
</form>
  </div>

        )
    }
}

export default SelectViagem;