import React, { Component } from 'react';

const info = {
  position: 'absolute',
  bottom: '-20px',
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

const success = {
  position: 'absolute',
  bottom: '-20px',
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

const primary = {
 
  width: '120px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'

}

const h2 = {
  fontFamily: 'Arial',
  fontSize:'15px'
}

const color = {
   color: 'green'
}

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

      <div style={color}>Status da Viagem</div>

  <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="opcao1"></input>
  <label class="form-check-label" for="inlineRadio1">Parado</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="opcao2"></input>
  <label class="form-check-label" for="inlineRadio2">Viajando</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="opcao3"></input>
  <label class="form-check-label" for="inlineRadio2">Aguardando Viagem</label>
</div>

<h2 style={h2} >Motorista:</h2>
<h2 style={h2} >Veiculo:</h2>
<h2 style={h2} >Destino:</h2>
<h2 style={h2} >Carga:</h2>
<h2 style={h2} >Partida:</h2>
<h2 style={h2} >Viagem:</h2>

<div style={color}>Status da Viagem</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="opcao1"></input>
  <label class="form-check-label" for="inlineRadio1">Parado</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="opcao2"></input>
  <label class="form-check-label" for="inlineRadio2">Viajando</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="opcao3"></input>
  <label class="form-check-label" for="inlineRadio2">Aguardando Viagem</label>
</div>

<h2 style={h2} >Motorista:</h2>
<h2 style={h2} >Veiculo:</h2>
<h2 style={h2} >Destino:</h2>
<h2 style={h2} >Carga:</h2>
<h2 style={h2} >Partida:</h2>
<h2 style={h2} >Viagem:</h2>

<div style={color}>Status da Viagem</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="opcao1"></input>
  <label class="form-check-label" for="inlineRadio1">Parado</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="opcao2"></input>
  <label class="form-check-label" for="inlineRadio2">Viajando</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="opcao3"></input>
  <label class="form-check-label" for="inlineRadio2">Aguardando Viagem</label>
</div>

<h2 style={h2} >Motorista:</h2>
<h2 style={h2} >Veiculo:</h2>
<h2 style={h2} >Destino:</h2>
<h2 style={h2} >Carga:</h2>
<h2 style={h2} >Partida:</h2>
<h2 style={h2} >Viagem:</h2>

<div style={color}>Status da Viagem</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="opcao1"></input>
  <label class="form-check-label" for="inlineRadio1">Parado</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="opcao2"></input>
  <label class="form-check-label" for="inlineRadio2">Viajando</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="opcao3"></input>
  <label class="form-check-label" for="inlineRadio2">Aguardando Viagem</label>
</div>

<h2 style={h2} >Motorista:</h2>
<h2 style={h2} >Veiculo:</h2>
<h2 style={h2} >Destino:</h2>
<h2 style={h2} >Carga:</h2>
<h2 style={h2} >Partida:</h2>
<h2 style={h2} >Viagem:</h2>


 <button style={primary} type="submit" class="btn btn-primary">Veiculo</button>
 <button style={primary} type="submit" class="btn btn-primary">Motorista</button>
 <button style={primary} type="submit" class="btn btn-primary">Relatório</button>
 <button style={primary} type="submit" class="btn btn-primary">Alterar</button>
</div>

  </div>


  <a href = "./EmpresaPage.js">
<button style={success} type="submit" class="btn btn-success">Menu</button>
</a>

<a href = "./Login.js">
<button style={info} type="submit" class="btn btn-info">Voltar</button>
</a>

</form>
  </div>

        )
    }
}

export default SelectViagem;