import React, { Component } from 'react';

class SelectMotorista extends Component {
    render(){
        return(
<div>
    <form>

    <div class="card text-center">
  <div class="card-header">
    Motorista
  </div>
  <div class="card-body">

      <div>Status do Motorista</div>

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

  </div>
</div>
<c>
<button type="submit" class="btn btn-primary">Veículo</button>
<button type="submit" class="btn btn-primary">Viagem</button>
<button type="submit" class="btn btn-danger">Excluir</button>
</c>

<b>
<button type="submit" class="btn btn-primary">Menu</button>
<button type="submit" class="btn btn-primary">Voltar</button>
</b>
</form>
  </div>

        )
    }
}

export default SelectMotorista;