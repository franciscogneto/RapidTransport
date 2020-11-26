import React, { Component } from 'react';
import EmpresaPage from './EmpresaPage';

const div = {
  marginTop:'180px',
  marginRight:'40px',
  marginLeft:'40px',
  textAlign: 'center',
  color:'white'
}

const b = {
  position: 'absolute',
  bottom: '8px',
  right: '145px',
  fontSize: '18px',
  display: 'block',
  margin: '0 auto',
  width: '120px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'
}

const c = {
  position: 'absolute',
  bottom: '8px',
  right: '275px',
  fontSize: '18px',
  display: 'block',
  margin: '0 auto',
  width: '120px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'
}

const d = {
  position: 'absolute',
  bottom: '8px',
  right: '16px',
  fontSize: '18px',
  display: 'block',
  margin: '0 auto',
  width: '120px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'
}




class BtnAddMotorista extends Component {


    render(){
        return(

            <div style={div}>

  <div className="row">

            <div className="form-group col-md-4">
            <label for="Nome">Nome Completo:</label>
            <input type="text" thfield="*{Nome}" className="form-control" id="Nome Completo"placeholder="ex: Ademir Ribeiro Santos"></input>
            </div>

            <div className="form-group col-md-4">
            <label for="Email">Email:</label>
            <input type="text" thfield="*{Email}" className="form-control" id="Email"placeholder="ex: Ademir@gmail.com"></input>
          </div>

          <div className="form-group col-md-2">
            <label for="password">Senha:</label>
            <input type="password" thfield="*{Email}" className="form-control" id="password"></input>
          </div>

          <div className="form-group col-md-2">
            <label for="Confirmepassword">Confirmar Senha:</label>
            <input type="password" className="form-control" id="Confirmepassword"></input>
          </div>

          <div className="form-group col-md-2">
            <label for="CPF">CPF:</label>
            <input type="text" className="form-control" id="CPF"placeholder="ex: 123.456.789-12"></input>
          </div>

          <div className="form-group col-md-2">
            <label for="Data de Nascimento">Data de Nascimento:</label>
            <input type="text" className="form-control" id="Data de Nascimento"placeholder="ex: 10/10/2000"></input>
          </div>

          <div className ="form-group col-md-2">
          <label for="Sexo1">Sexo:</label>
          <select className="form-control" id="Sexo1">
            <option value = "Masculino" >Masculino</option>
            <option value = "Feminino">Feminino</option>
          </select>
        </div>

        <div className ="form-group col-md-3">
                <label for="input3">Celular:</label>
                <input type="text" className="form-control" id="Celular" placeholder="(15)9999-9999"></input>
        </div>


      <div className ="form-group col-md-6">
        <label for="inputAddress">Endereço:</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="Rua, nº 0"></input>
      </div>

        <div class="form-group col-md-3">
          <label for="inputCity">Cidade:</label>
          <input type="text" className="form-control" id="inputCity" placeholder="Sorocaba"></input>

        </div>

        <div className="form-group col-md-2">
          <label for="inputEstado">Estado:</label>
          <select id="inputEstado" class="form-control">
                <option value = "Acre(AC)">Acre(AC)</option>
                <option value = "Alagoas(AL)">Alagoas(AL) </option>
                <option value = "Amapá(AP)">Amapá(AP) </option>
                <option value = "Amazonas(AM)">Amazonas(AM) </option>
                <option value = "Bahia(BA)">Bahia(BA)</option>
                <option value = "Ceará(CE)">Ceará(CE) </option>
                <option value = "Distrito Federal(DF)">Distrito Federal(DF) </option>
                <option value = "Espírito Santo(ES)">Espírito Santo(ES) </option>
                <option value = "Goiás(GO)">Goiás(GO)</option>
                <option value = "Maranhão(MA)">Maranhão(MA) </option>
                <option value = "Mato Grosso(MT)">Mato Grosso(MT) </option>
                <option value = "Mato Grosso do Sul(MS)">Mato Grosso do Sul(MS) </option>
                <option value = "Minas Gerais(MG)">Minas Gerais(MG)</option>
                <option value = "Pará(PA)">Pará(PA) </option>
                <option value = "Paraíba(PB)">Paraíba(PB)</option>
                <option value = "Paraná(PR)">Paraná(PR) </option>
                <option value = "Pernambuco(PE)">Pernambuco(PE)</option>
                <option value = "Piauí(PI)">Piauí(PI) </option>
                <option value = "Rio de Janeiro(RJ)">Rio de Janeiro(RJ) </option>
                <option value = "Rio Grande do Norte(RN)">Rio Grande do Norte(RN)</option>
                <option value = "Rio Grande do Sul(RS)">Rio Grande do Sul(RS) </option>
                <option value = "Rondônia(RO)">Rondônia(RO) </option>
                <option value = "Roraima(RR)">Roraima(RR)</option>
                <option value = "Santa Catarina(SC)">Santa Catarina(SC) </option>
                <option value = "São Paulo(SP)">São Paulo(SP)</option>
                <option value = "Sergipe(SE)">Sergipe(SE) </option>
                <option value = "Tocantins(TO)">Tocantins(TO) </option>
          </select>
        </div>

        <div className="form-group col-md-2">
          <label for="inputCEP">CEP:</label>
          <input type="text" className="form-control" id="inputCEP" placeholder="00000-000"></input>
        </div>

        <div class="form-group col-md-2">
          <label for="inputAbilitação">Abilitação:</label>
          <input type="text" className="form-control" id="inputAbilitação" placeholder="A,B,C,D ou E"></input>
        </div>
  
          </div>

          <a href = "./BtnAddMotorista"> 
          <button  style={b} type="submit" className="btn btn-success" size="lg">Add </button>
          </a>
       <a href = "./EmpresaPage.js">
          <button  style={c} type="submit" className="btn btn-primary" size="lg">Menu </button>
          </a>

          <a href = "./Login.js">
          <button  style={d} type="submit" className="btn btn-info" size="lg">Voltar </button>
          </a>
          
  </div>


        )   
}
}
export default BtnAddMotorista;



