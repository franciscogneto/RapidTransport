import React, { Component } from 'react';
//import './Btn Avisos.css';

class BtnAvisos extends Component {
    render(){
        return(
<div>
 
    <div class="card text-center">
  <div class="card-header">
    Importantes
  </div>
  <div class="card-body">
  </div>
</div>


<div class="card text-center">
  <div class="card-header">
    Atenção
  </div>
  <div class="card-body">
  </div>
</div>


<div class="card text-center">
  <div class="card-header">
Avisos-Preditivos/Preventivos
  </div>
  <div class="card-body">
  </div>
</div>

<button type="submit" class="btn btn-primary btn-lg rounded float-right ">Voltar</button>

  </div>

        )
    }
}

export default BtnAvisos;