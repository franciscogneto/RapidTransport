import React, { Component } from 'react';

const i = {
  position: 'absolute',
  bottom: '20px',
  right: '40px',
  fontSize: '18px',
  display: 'block',
  margin: '0 auto',
  width: '120px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer',
}

const center = {
  marginTop: '80px'
}

const td = {

  color: 'black',
  textAlign: 'center',
  fontSize:'15px'
}


class BtnVeiculo extends Component {
    render(){
        return(
<div>
    <form>
      <div className="form-group">
        <input type="text" className="form-control" id="inputtext" placeholder="Pesquisa de Veículo"></input>
      </div>

      <form method="post">
      <button type="submit" className="btn btn-primary rounded mx-auto d-block">Pesquisar</button>
    </form>
    </form>


    <div style={center} className="card text-center">
  <div class="card-header">
    Pesquisar Veículo
  </div>
  <div class="card-body">

  <h2 style={td}> Nenhum veículo encontrado no momento </h2>

     <a href = "./BtnAddVeiculo.js">
    <button type="submit" className="btn btn-primary">Add Veiculo</button>
    </a>
  </div>
</div>
<a href = "./EmpresaPage.js">
<button style={i} type="submit" className="btn btn-info">Voltar</button>
</a>
  </div>

        )
    }
}

export default BtnVeiculo;