import React, { Component } from 'react';
import styled from "styled-components";


class BtnAddRelatorio extends Component {
    render(){
        return(
<div>
<div className="container">
  <div className="col">
  <div className="col-md-3"></div>
  
    <div className="form-group">
        <label for="Nome">Nome:</label>
        <input type="text" class="form-control" id="Nome" placeholder="ex: Carlos"></input>
      </div>

      <div className="form-group">
        <label for="Item">Item 1:</label>
        <input type="text" class="form-control" id="Item" placeholder="ex: Pneu"></input>
      </div>

      <div className="form-group">
        <label for="Item">Item 2:</label>
        <input type="text" class="form-control" id="Item" placeholder="ex: Radiador"></input>
      </div>

      <div className="form-group">
        <label for="Item">Item 3:</label>
        <input type="text" class="form-control" id="Item" placeholder="ex: Óleo"></input>
      </div>

      <div className="form-group">
        <label for="Item">Item 4:</label>
        <input type="text" class="form-control" id="Item" placeholder="ex: Combustivel"></input>
      </div>

      <div className="form-group">
        <label for="Item">Item 5:</label>
        <input type="text" class="form-control" id="Item" placeholder="ex: Filtro"></input>
      </div>

      <div className="form-group">
        <label for="Item">Item 6:</label>
        <input type="text" class="form-control" id="Item" placeholder="ex: Avarias no Veículo"></input>
      </div>

      <div className="form-group">
        <label for="Item">Item 7:</label>
        <input type="text" class="form-control" id="Item" placeholder="ex: Outros"></input>
      </div>


      <button type="submit" class="btn btn-primary" size="lg">Menu</button>

      <button type="submit" class="btn btn-primary" size="lg">Voltar</button>


</div>
</div>
</div>
    )
}
}
export default BtnAddRelatorio;