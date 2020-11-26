import React, { Component } from 'react';

const info = {
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

const success = {
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

const warning = {
  bottom: '100px',
  width: '120px',
  height: '36px',
  borderRadius:'60px',
  fontSize: '15px',
  cursor: 'pointer'
}

const danger = {
  
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

const h5 = {
  fontFamily: 'Arial',
  fontSize:'15px'
}

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

      <div>Status do Motorista 1</div>

  <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="opcao1"></input>
  <label class="form-check-label" for="inlineRadio2">Parado</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="opcao2"></input>
  <label class="form-check-label" for="inlineRadio2">Viajando</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="opcao3"></input>
  <label class="form-check-label" for="inlineRadio2">Aguardando Viagem</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="opcao4"></input>
  <label class="form-check-label" for="inlineRadio2">Selecionar</label>
</div>

 


<h5 style={h5} >Nome:</h5>
<h5 style={h5} >Email:</h5>
<h5 style={h5} >Celular:</h5>



<div>Status do Motorista 2</div>

<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio" value="opcao1"></input>
<label class="form-check-label" for="inlineRadio">Parado</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio" value="opcao2"></input>
<label class="form-check-label" for="inlineRadio">Viajando</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio" value="opcao3"></input>
<label class="form-check-label" for="inlineRadio">Aguardando Viagem</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio" value="opcao4"></input>
  <label class="form-check-label" for="inlineRadio">Selecionar</label>
</div>

<h5 style={h5} >Nome:</h5>
<h5 style={h5} >Email:</h5>
<h5 style={h5} >Celular:</h5>


<div>Status do Motorista 3</div>
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
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio4" value="opcao4"></input>
  <label class="form-check-label" for="inlineRadio4">Selecionar</label>
</div>

<h5 style={h5} >Nome:</h5>
<h5 style={h5} >Email:</h5>
<h5 style={h5} >Celular:</h5>

<div>Status do Motorista 4</div>
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
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio4" value="opcao4"></input>
  <label class="form-check-label" for="inlineRadio4">Selecionar</label>
</div>


<h5 style={h5} >Nome:</h5>
<h5 style={h5} >Email:</h5>
<h5 style={h5} >Celular:</h5>


<div>Status do Motorista 5</div>
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
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio4" value="opcao4"></input>
  <label class="form-check-label" for="inlineRadio4">Selecionar</label>
</div>


<h5 style={h5} >Nome:</h5>
<h5 style={h5} >Email:</h5>
<h5 style={h5} >Celular:</h5>


<div>Status do Motorista 6</div>
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
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio4" value="opcao4"></input>
  <label class="form-check-label" for="inlineRadio4">Selecionar</label>
</div>


<h5 style={h5} >Nome:</h5>
<h5 style={h5} >Email:</h5>
<h5 style={h5} >Celular:</h5>


 <button style={primary} type="submit" class="btn btn-primary">Veiculo</button>
 <button style={warning} type="submit" class="btn btn-warning">Viagem</button>
 <button style={danger} type="submit" class="btn btn-danger">Excluir</button>
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

export default SelectMotorista;


