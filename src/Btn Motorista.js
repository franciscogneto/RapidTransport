import React, { Component } from 'react';

const b ={
  position: 'absolute',
  bottom: '10px',
  right: '35px',
  fontSize: '18px',
  display: 'block',
  margin: '0 auto',
  width: '120px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'
}

const control = {
  marginLeft: '150px'
}

const center = {
  marginTop: '80px'
}

const td = {

  color: 'black',
  textAlign: 'center',
  fontSize:'15px'
}

class BtnMotorista extends Component {
    render(){
        return(
<div>
    <form>
      <div className="form-group">
        <input style={control} type="text" class="form-control col-md-10" id="inputPassword" placeholder="Pesquisa de Motorista"></input>
      </div>
      <button type="submit" class="btn btn-primary rounded mx-auto d-block">Pesquisar</button>
    </form>



    <div style={center} class="card text-center">
  <div class="card-header">
    Pesquisar Motorista
  </div>
  <div class="card-body">
  <h2 style={td}> Nenhum Motorista encontrado no momento </h2>

  <a href = "./BtnAddMotorista.js">
    <button type="submit" class="btn btn-primary">Add Motorista</button>
    </a>
  </div>
</div>


<a href = "./BtnAvisos.js">
<button style={b} type="submit" class="btn btn-info">Voltar</button>
</a>
  </div>

        )
    }
}

export default BtnMotorista;