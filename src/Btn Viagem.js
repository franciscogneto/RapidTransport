import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const info = {
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
  marginTop: '80px'
}

const secondary = {
  marginLeft: '20px'
}


const td = {

  color: 'black',
  textAlign: 'center',
  fontSize:'15px'
}

class BtnViagem extends Component {

state={
    fecha:new Date("2018", "01", "01")
}

state1={
    abre:new Date("2020", "01", "01")
}

onChange=fecha=>{
    this.setState({fecha: fecha});
}

onChange1=abre=>{
    this.setState({abre: abre});
}
    render(){
        return(
<div>
    <div className="conteiner">
        <div ClassName="center">  
   <DatePicker selected={this.state.fecha} onChange={this.onChange}/>  <DatePicker selected={this.state1.abre} onChange1={this.onChange1}/> 
   <form method="post">
      <button style={secondary} type="submit" class="btn btn-secondary">Pesquisar</button>
      </form>
      </div>
      </div>



    <div style={center} class="card text-center">
  <div class="card-header">
    Pesquisar Veículo
  </div>
  <div class="card-body">

   <h2 style={td}> Nenhuma Viagem encontrada no momento, adicione uma viagem </h2>
    <a type="submit" class="btn btn-primary">Criar Viagem</a>
  </div>
</div>
<a>
<button style={info} type="submit" class="btn btn-info">Voltar</button>
</a>
  </div>

        )
    }
}

export default BtnViagem;