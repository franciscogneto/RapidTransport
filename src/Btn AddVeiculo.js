import React, { Component } from 'react';


const div = {
  textAlign: 'center',
  marginTop: '160px',
  marginLeft: '240px',
  color:'white'
}

const a = {
  position: 'absolute',
  bottom: '10px',
  right: '155px',
  fontSize: '18px',
  display: 'block',
  margin: '0 auto',
  width: '120px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'
}

const b = {
  position: 'absolute',
  bottom: '10px',
  right: '16px',
  fontSize: '18px',
  display: 'block',
  margin: '0 auto',
  width: '120px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'
}

const c = {
  position: 'absolute',
  bottom: '230px',
  right: '980px',
  fontSize: '18px',
  display: 'block',
  margin: '0 auto',
  width: '120px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'
}

const d = {
  position: 'absolute',
  bottom: '230px',
  right: '850px',
  fontSize: '18px',
  display: 'block',
  margin: '0 auto',
  width: '120px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'
}

class BtnAddVeiculo extends Component {
    render(){
        return(
<div style={div}>
  <navbar/>
<div className="container">
  <div className="row">
  <div className="col-md-3"></div>
  
    <form>
    <div class="form-group">
    <label for="Modelo">Modelo do Veículo</label>
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

    <div class="form-group">
    <label for="Cor">Cor</label>
      <select class="form-control" id="Cor">
      <option value = "Branco">Branco</option>
      <option value = "Preto">Preto</option>
      <option value = "Azul">Azul</option>
      <option value = "Vermelho">Vermelho</option>
      <option value = "Cinza">Cinza</option>
    </select>
    </div>

    <div className="form-group">
        <label for="placa">Placa</label>
        <input type="text" class="form-control" id="placa" placeholder="ABC-0123"></input>
      </div>

      <div class="form-group">
    <label for="Ano">Ano do Veículo</label>
      <select class="form-control" id="Ano">
      <option value = "2020">2020</option>
      <option value = "2019">2019</option>
      <option value = "2018">2018</option>
      <option value = "2017">2017</option>
      <option value = "2016">2016</option>
      <option value = "2015">2015</option>
      <option value = "2014">2014</option>
      <option value = "2013">2013</option>
      <option value = "2012">2012</option>
      <option value = "2011">2011</option>
      <option value = "2010">2010</option>
      <option value = "2009">2009</option>
      <option value = "2008">2008</option>
      <option value = "Outros">Outros</option>
    </select>
    </div>

      <div className="form-group">
        <label for="Km">Km</label>
        <input type="number" class="form-control" id="inputPassword" placeholder="Digite a Quilometragem"></input>
      </div>

      <div className="form-group">
      <label for="Km/Revisão1">Km/Revisão</label>
      <select class="form-control" id="Km/Revisão1">
      <option value = "10.000km">10.000km</option>
      <option value = "60.000km">60.000km</option>
      <option value = "120.000km">120.000km</option>
      <option value = "180.000km">180.000km</option>
      <option value = "240.000km">240.000km</option>
      <option value = "300.000km">300.000km</option>
      <option value = "360.000km">360.000km</option>
      <option value = "420.000km">420.000km</option>
      <option value = "480.000km">480.000km</option>
      <option value = "540.000km">540.000km</option>
      <option value = "600.000km">600.000km</option>
      <option value = "Outros">Outros</option>
    </select>
    </div>
    
    <form method="post">
      <button style={c} type="submit" class="btn btn-success">Add</button>
    </form>
    
      <a href = "./BtnAddVeiculo.js">
      <button style={d} type="submit" class="btn btn-danger">Excluir</button>
      </a>

      <a href = "./EmpresaPage.js">
      <button style={b} type="submit" class="btn btn-primary">Menu</button>
      </a>

      <a href = "./Login.js">
      <button style={a} type="submit" class="btn btn-info">Voltar</button>
      </a>

    </form>

    </div>
  </div>
  </div>
        )
    }
}
export default BtnAddVeiculo;