import React, { Component } from 'react';
import styled from "styled-components";


class BtnAddVeiculo extends Component {
    render(){
        return(
<div>
  <navbar/>
<div className="container">
  <div className="row">
  <div className="col-md-3"></div>
  
    <form>
    <div class="form-group">
    <label for="Modelo">Modelo do Veículo</label>
      <select class="form-control" id="Modelo">
      <option>Ford</option>
      <option>Scania</option>
      <option>Volvo</option>
      <option>Volkswagem</option>
      <option>Mercedes-Bens</option>
      <option>Iveco</option>
      <option>DAF</option>
      <option>MAN</option>
      <option>Outro</option>
    </select>
    </div>

    <div class="form-group">
    <label for="Cor">Cor</label>
      <select class="form-control" id="Cor">
      <option>Branco</option>
      <option>Preto</option>
      <option>Azul</option>
      <option>Vermelho</option>
      <option>Cinza</option>
    </select>
    </div>

    <div className="form-group">
        <label for="placa">Placa</label>
        <input type="text" class="form-control" id="placa" placeholder="ABC-0123"></input>
      </div>

      <div class="form-group">
    <label for="Ano">Ano do Veículo</label>
      <select class="form-control" id="Ano">
      <option>2020</option>
      <option>2019</option>
      <option>2018</option>
      <option>2017</option>
      <option>2016</option>
      <option>2015</option>
      <option>2014</option>
      <option>2013</option>
      <option>2012</option>
      <option>2011</option>
      <option>2010</option>
      <option>2009</option>
      <option>2008</option>
      <option>Outros</option>
    </select>
    </div>

      <div className="form-group">
        <label for="Km">Km</label>
        <input type="number" class="form-control" id="inputPassword" placeholder="Digite a Quilometragem"></input>
      </div>

      <div className="form-group">
      <label for="Km/Revisão1">Km/Revisão</label>
      <select class="form-control" id="Km/Revisão1">
      <option>10.000km</option>
      <option>60.000km</option>
      <option>120.000km</option>
      <option>180.000km</option>
      <option>240.000km</option>
      <option>300.000km</option>
      <option>360.000km</option>
      <option>420.000km</option>
      <option>480.000km</option>
      <option>540.000km</option>
      <option>600.000km</option>
      <option>Outros</option>
    </select>
    </div>
      <a>
      <button type="submit" class="btn btn-success">Add</button>
      <button type="submit" class="btn btn-success">Excluir</button>
      </a>
      <b>
      <button type="submit" class="btn btn-primary">Menu</button>
      <button type="submit" class="btn btn-primary">Voltar</button>
      </b>
    </form>

    </div>
  </div>
  </div>
        )
    }
}
export default BtnAddVeiculo;