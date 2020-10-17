import React, { Component } from 'react';

class FormularioEmpresa extends Component {
    render(){
        return(
<div>
  <navbar/>
<div className="container">
  <div className="row">
  <div className="col-md-3">
  </div>
  <div className="col-md-3">
    <form>
      <div className="form-group">
        <label for="exemplo">CNPJ</label>
        <div class="col-sm-15">
<input type="text" class="form-control" id="inputPassword" placeholder="Digite o CNPJ"></input>
      </div>
      </div>
      <div className="form-group">
        <label for="exemplo">Senha</label>

        <div class="col-sm-15">
<input type="password" class="form-control" id="inputPassword" placeholder="Digite sua Senha"></input>
        
</div>
      </div>

      <div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline"></input>
								<label class="custom-control-label" for="customControlInline">Relembrar</label>
                </div>
						</div>
      <div className="form-group form-check">
        <imput type="checkbox" className="form-check-input" id="exampleCheck1" />
      </div>
      <button type="submit" class="btn btn-outline-primary">Login</button>
    </form>
  </div>
  </div>

</div>

    </div>

        )
    }
}
export default FormularioEmpresa;
