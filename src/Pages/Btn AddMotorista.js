import React, { Component } from 'react';
import styled from "styled-components";


class BtnAddMotorista extends Component {
    render(){
        return(

            <div>

  <div className="row">

            <div className="form-group col-md-4">
            <label for="Nome">Nome Completo:</label>
            <input type="text" class="form-control" id="Nome Completo"placeholder="ex: Ademir Ribeiro Santos"></input>
            </div>

            <div className="form-group col-md-4">
            <label for="Email">Email:</label>
            <input type="text" class="form-control" id="Email"placeholder="ex: Ademir@gmail.com"></input>
          </div>

          <div className="form-group col-md-2">
            <label for="password">Senha:</label>
            <input type="password" class="form-control" id="password"></input>
          </div>

          <div className="form-group col-md-2">
            <label for="Confirmepassword">Confirmar Senha:</label>
            <input type="Confirmepassword" class="form-control" id="Confirmepassword"></input>
          </div>

          <div className="form-group col-md-2">
            <label for="CPF">CPF:</label>
            <input type="text" class="form-control" id="CPF"placeholder="ex: 123.456.789-12"></input>
          </div>

          <div className="form-group col-md-2">
            <label for="Data de Nascimento">Data de Nascimento:</label>
            <input type="text" class="form-control" id="Data de Nascimento"placeholder="ex: 10/10/2000"></input>
          </div>

          <div className ="form-group col-md-2">
          <label for="Sexo1">Sexo:</label>
          <select class="form-control" id="Sexo1">
            <option>Masculino</option>
            <option>Feminino</option>
          </select>
        </div>

        <div className ="form-group col-md-3">
                <label for="input3">Celular:</label>
                <input type="text" class="form-control" id="Celular" placeholder="(15)9999-9999"></input>
        </div>


      <div className ="form-group col-md-6">
        <label for="inputAddress">Endereço:</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Rua, nº 0"></input>
      </div>

        <div class="form-group col-md-3">
          <label for="inputCity">Cidade:</label>
          <input type="text" class="form-control" id="inputCity" placeholder="Sorocaba"></input>

        </div>

        <div class="form-group col-md-2">
          <label for="inputEstado">Estado:</label>
          <select id="inputEstado" class="form-control">
                <option>Acre(AC)</option>
                <option>Alagoas(AL) </option>
                <option>Amapá(AP) </option>
                <option>Amazonas(AM) </option>
                <option>Bahia(BA)</option>
                <option>Ceará(CE) </option>
                <option>Distrito Federal(DF) </option>
                <option>Espírito Santo(ES) </option>
                <option>Goiás(GO)</option>
                <option>Maranhão(MA) </option>
                <option>Mato Grosso(MT) </option>
                <option>Mato Grosso do Sul(MS) </option>
                <option>Minas Gerais(MG)</option>
                <option>Pará(PA) </option>
                <option>Paraíba(PB)</option>
                <option>Paraná(PR) </option>
                <option>Pernambuco(PE)</option>
                <option>Piauí(PI) </option>
                <option>Rio de Janeiro(RJ) </option>
                <option>Rio Grande do Norte(RN)</option>
                <option>Rio Grande do Sul(RS) </option>
                <option>Rondônia(RO) </option>
                <option>Roraima(RR)</option>
                <option>Santa Catarina(SC) </option>
                <option>São Paulo(SP)</option>
                <option>Sergipe(SE) </option>
                <option>Tocantins(TO) </option>
          </select>
        </div>

        <div class="form-group col-md-2">
          <label for="inputCEP">CEP:</label>
          <input type="text" class="form-control" id="inputCEP" placeholder="00000-000"></input>
        </div>
  
          </div>
          <button type="submit" class="btn btn-success" size="lg">Add</button>
          <button type="submit" class="btn btn-primary" size="lg">Menu</button>
          <button type="submit" class="btn btn-primary" size="lg">Voltar</button>
  </div>


        )   
}
}
export default BtnAddMotorista;