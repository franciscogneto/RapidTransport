import React, { Component } from 'react';

const center = {
  textAlign: 'center',
  marginTop: '150px'
}

const body = {

  marginLeft:'20px',
  marginRight:'20px'
}

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

const td = {

  color: 'blue',
  textAlign: 'center',
  fontSize:'15px'
}


class BtnAvisoME extends Component {
    render(){
        return(
<div>
 
    <div style={center} class="card text-center">
  <div class="card-header">
    Avisos
  </div>
  <div style={body} class="card-body">
 
   <h2 style={td}> Nenhum Aviso disponivel no momento </h2>
     
  </div>
</div>

<div>

<a href = "./BtnAvisos.js">
<button style={a} type="submit" class="btn btn-primary btn-lg rounded float-right ">Voltar</button>
</a>

</div>
  </div>

        )
    }
}

export default BtnAvisoME;