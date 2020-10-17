import React, { Component } from 'react';

class BtnCriarViagem extends Component {
    render(){
        return(
<div>
  <navbar/>
<div className="container">
  <div className="row">
  <div className="col-md-3">
  </div>
  <div className="col-md-3">
    <form>
      <div className="form-group">
        <label for="exemplo">Motorista</label>
        <input type="text" class="form-control" id="motorista" placeholder="Nome do Motorista"></input>
      </div>

      <div className="form-group">
        <label for="exemplo">Partida</label>
        <input type="text" class="form-control" id="partida" placeholder="Horário de Partida"></input>
      </div>

      <div className="form-group">
        <label for="exemplo">Tempo de Relatório</label>
        <select class="form-control" id="Tempo de Relatório">
      <option>1 Dia</option>
      <option>1 Semana</option>
      <option>1 Mês</option>
    </select>
    </div>

      <div className="form-group">
      <label for="Relatório">Relatório</label>
      <select class="form-control" id="Relatório">
      <option>Relatório 1</option>
      <option>Relatório 2</option>
      <option>Relatório 3</option>
      <option>Relatório 4</option>
      <option>Relatório 5</option>
      <option>Relatório 6</option>
      <option>Relatório 7</option>
      <option>Relatório 8</option>
      <option>Relatório 9</option>
      <option>Relatório 10</option>
    </select>
    </div>

    <div class="form-group">
    <label for="Veiculo">Veículo</label>
      <select class="form-control" id="Modelo">
      <option>Ford</option>
      <option>Scania</option>
      <option>Volvo</option>
      <option>Volkswagem</option>
      <option>Mercedes-Bens</option>
      <option>Iveco</option>
      <option>DAF</option>
      <option>MAN</option>
      <option>Outro</option>
    </select>
    </div>

    <div className="form-group">
        <label for="exemplo">Destino</label>
        <input type="text" class="form-control" id="inputPassword" placeholder="Destino"></input>
      </div>

      <div className="form-group">
        <label for="exemplo">Km</label>
        <input type="number" class="form-control" id="inputPassword" placeholder="Km"></input>
      </div>
<a>
      <button type="submit" class="btn btn-primary">Adicionar Viagem</button>
      </a>

      <b>
      <button type="submit" class="btn btn-primary">Voltar</button>
      </b>

    </form>
  </div>
  </div>

</div>

    </div>

        )
    }
}
export default BtnCriarViagem;