import React, { Component } from 'react';

const i = {
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
  cursor: 'pointer',
}

const center = {
  marginTop: '40px'
}

const td = {

  color: 'black',
  textAlign: 'center',
  fontSize:'15px'
}

class BtnRelatorioViagem extends Component {
    render(){
        return(
<div>
    <form>
      <div className="form-group">
        <input style={center} type="text" class="form-control" id="inputtext" placeholder="Pesquisa de Relatório"></input>
      </div>
      <button type="submit" class="btn btn-primary rounded mx-auto d-block">Pesquisar</button>
    </form>


    <div style={center} class="card text-center">
  <div class="card-header">
    Pesquisa de seus Relatórios
  </div>
  <div class="card-body">
  <h2 style={td}> Nenhum relatório adicionado no momento </h2>

    <a href = "./BtnRelatorioViagem.js">
    <button type="submit" class="btn btn-primary">Add Relatório</button>
    </a>

  </div>
</div>
<a href = "./Avisos.js">
<button style={i} type="submit" class="btn btn-info">Voltar</button>
</a>

  </div>

        )
    }
}

export default BtnRelatorioViagem;
