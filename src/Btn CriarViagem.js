import React, { Component } from 'react';

const a = {
  position: 'absolute',
  bottom: '-60px',
  right: '-880px',
  display: 'block',
  margin: '0 auto',
  width: '120px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'
}

const b ={
  position: 'absolute',
  bottom: '-40px',
  right: '65px',
  fontSize: '18px',
  display: 'block',
  margin: '0 auto',
  width: '160px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'
}

const group = {
  textAlign: 'center',
  marginTop: '40px',
  color:'white',
}

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
      <div style={group} className="form-group">
        <label for="exemplo">Motorista</label>
        <input type="text" class="form-control" id="motorista" placeholder="Nome do Motorista"></input>
      </div>

      <div style={group} className="form-group">
        <label for="exemplo">Partida</label>
        <input type="text" class="form-control" id="partida" placeholder="Horário de Partida"></input>
      </div>

      <div style={group} className="form-group">
        <label for="exemplo">Tempo de Relatório</label>
        <select class="form-control" id="Tempo de Relatório">
      <option value = "1 Dia">1 Dia</option>
      <option value = "1 Semana">1 Semana</option>
      <option value = "1 Mês">1 Mês</option>
    </select>
    </div>

      <div style={group} className="form-group">
      <label for="Relatório">Relatório</label>
      <select class="form-control" id="Relatório">
      <option value = "Relatório 1">Relatório 1</option>
      <option value = "Relatório 2">Relatório 2</option>
      <option value = "Relatório 3">Relatório 3</option>
      <option value = "Relatório 4">Relatório 4</option>
      <option value = "Relatório 5">Relatório 5</option>
      <option value = "Relatório 6">Relatório 6</option>
      <option value = "Relatório 7">Relatório 7</option>
      <option value = "Relatório 8">Relatório 8</option>
      <option value = "Relatório 9">Relatório 9</option>
      <option value = "Relatório 10">Relatório 10</option>
    </select>
    </div>

    <div style={group} className="form-group">
    <label for="Veiculo">Veículo</label>
      <select class="form-control" id="Modelo">
      <option value = "Ford">Ford</option>
      <option value = "Scania">Scania</option>
      <option value = "Volvo">Volvo</option>
      <option value = "Volkswagem">Volkswagem</option>
      <option value = "Mercedes-Bens">Mercedes-Bens</option>
      <option value = "Iveco">Iveco</option>
      <option value = "DAF">DAF</option>
      <option value = "MAN">MAN</option>
      <option value = "Outro">Outro</option>
    </select>
    </div>

    <div style={group} className="form-group">
        <label for="exemplo">Destino</label>
        <input type="text" class="form-control" id="inputPassword" placeholder="Destino"></input>
      </div>

      <div style={group} className="form-group">
      <label for="Carga">Carga</label>
      <select class="form-control" id="Relatório">
      <option value = "Alimentos Perecíveis">Alimentos Perecíveis</option>
      <option value = "Alimentos">Alimentos</option>
      <option value = "Medicamento">Medicamento</option>
      <option value = "Mudanças">Mudanças</option>
      <option value = "Frigorífica">Frigorífica</option>
      <option value = "Carga sólida">Carga sólida</option>
      <option value = "Carga secas">Carga secas</option>
      <option value = "Carga perigosa">Carga perigosa</option>
      <option value = "Carga líquida">Carga líquida</option>
      <option value = "Outros">Outros</option>
    </select>
    </div>

      <div style={group} className="form-group">
        <label for="exemplo">Km</label>
        <input type="number" class="form-control" id="inputPassword" placeholder="Km"></input>
      </div>
      

      <a href = "./BtnViagem.js">
      <button style={b} type="submit" class="btn btn-primary">Adicionar Viagem</button>
      </a>

      <a href = "./BtnAddMotorista.js">
      <button style={a} type="submit" class="btn btn-info">Voltar</button>
      </a>
 
    </form>
  </div>
  </div>

</div>

    </div>

        )
    }
}
export default BtnCriarViagem;