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
  cursor: 'pointer'
}

const center = {
  marginTop: '20px'
}

const td = {

  color: 'black',
  textAlign: 'center',
  fontSize:'15px'
}


class BtnRelatorio extends Component {
    render(){
        return(
<div>
    <form>
      <div style={center} className="form-group">
        <input type="text" class="form-control" id="inputtext" placeholder="Pesquisa de Relatório"></input>
      </div>
      <button type="submit" class="btn btn-primary rounded mx-auto d-block">Pesquisar</button>
    </form>


    <div style={center} class="card text-center">
  <div class="card-header">
    Pesquisar Relatório
  </div>
  <div class="card-body">

  <h2 style={td}> Nenhum relatório encontrado no momento </h2>

  <a href = "./BtnRelatorioViagem.js">
    <button type="submit" class="btn btn-primary">Criar Relatório</button>
    </a>

  </div>
</div>

 <a href = "./BtnAvisos.js">
<button style={i} type="submit" class="btn btn-info">Voltar</button>
</a>

  </div>

        )
    }
}

export default BtnRelatorio;