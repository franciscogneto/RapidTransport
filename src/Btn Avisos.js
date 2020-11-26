import React, { Component } from 'react';

const a = {
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  display: 'block',
  margin: '0 auto',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'
}

const center = {
  textAlign: 'center',
  marginTop: '90px'
}

const td = {

  color: 'black',
  textAlign: 'center',
  fontSize:'15px'
}


class BtnAvisos extends Component {
    render(){
        return(
<div>
 
    <div style={center} className="card text-center">
  <div class="card-header">
    Importantes
  </div>
  <div class="card-body">
  <h2 style={td}> Nenhum Aviso Importante disponivel no momento </h2>
  </div>
</div>


<div style={center} className="card text-center">
  <div className="card-header">
    Atenção
  </div>
  <div className="card-body">
  <h2 style={td}> Nenhuma atenção disponivel no momento </h2>
  </div>
</div>


<div style={center} className="card text-center">
  <div className="card-header">
Avisos-Preditivos/Preventivos
  </div>
  <div className="card-body">
  <h2 style={td}> Nenhum Aviso-Predeitivos/Preventivos disponivel no momento </h2>
  </div>
</div>

<a href = "./Login.js">
<button style={a} type="submit" className="btn btn-primary btn-lg rounded float-right ">Voltar</button>
</a>

  </div>

        )
    }
}

export default BtnAvisos;