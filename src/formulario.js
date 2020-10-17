import React, { Component } from 'react';
import styled from "styled-components";

class Formulario extends Component {
    render(){
        return(
<div>
<div className="container">
  <div className="row">
  <div className="col-md-3">
  </div>
  <div className="col-md-3">
    <form>
      <div className="form-group">
        <label for="exemplo">CPF</label>
        <input type="text" class="form-control" id="inputPassword" placeholder="Digite o CPF"></input>
      </div>
      <div className="form-group">
        <label for="exemplo">Senha</label>
        <input type="password" class="form-control" id="inputPassword" placeholder="Digite sua Senha"></input>
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
      <div class="d-flex justify-content-center links">
						<a href="#">Esquceu sua senha?</a>
					</div>
    </form>
  </div>
  </div>

</div>

    </div>

        )
    }
}
export default Formulario;