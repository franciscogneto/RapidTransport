import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import './Btn Viagem.css';


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
      <button type="submit" class="btn btn-secondary">Pesquisar</button>
      </div>
      </div>



    <div class="card text-center">
  <div class="card-header">
    Pesquisar Veículo
  </div>
  <div class="card-body">
 
    <a type="submit" class="btn btn-primary">Criar Viagem</a>
  </div>
</div>
<a>
<button type="submit" class="btn btn-info">Voltar</button>
</a>
  </div>

        )
    }
}

export default BtnViagem;