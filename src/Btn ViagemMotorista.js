import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const div = {
  textAlign: 'center',
  color:'white'
}

const info = {
  position: 'absolute',
  bottom: '-500px',
  right: '160px',
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
  bottom: '-500px',
  right: '30px',
  fontSize: '18px',
  display: 'block',
  margin: '0 auto',
  width: '120px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'
}

const success = {
  fontSize: '18px',
  display: 'block',
  margin: '0 auto',
  width: '120px',
  height: '36px',
  borderRadius: '60px',
  fontSize: '15px',
  cursor: 'pointer'
}

const BtnViagemMotorista = (props) => {
    const [rSelected, setRSelected] = useState(null);
    const [rSelected1, setRSelected1] = useState(null);
    const [rSelected2, setRSelected2] = useState(null);
    const [rSelected3, setRSelected3] = useState(null);
    const [rSelected4, setRSelected4] = useState(null);
    const [rSelected5, setRSelected5] = useState(null);
    const [rSelected6, setRSelected6] = useState(null);
  
    return (
      <div>

<div style={div}>
<div className="container">
  <div className="col">
  <div className="col-md-3"></div>
  
    <div className="form-group">
        <label for="Nome">Nome:</label>
        <input type="text" class="form-control" id="Nome" placeholder="ex: Carlos"></input>
      </div>

      <div className="form-group">
          <label for="inputItem">Item 1:</label>
          <select id="inputItem" class="form-control">
                <option value = "Pneu">Pneu</option>
                <option value = "Radiador">Radiador</option>
                <option value = "Óleo">Óleo</option>
                <option value = "Combustivel">Combustivel</option>
                <option value = "Filtro">Filtro</option>
                <option value = "Avarias do Veículo">Avarias do Veículo</option>
          </select>
        </div>


        <ButtonGroup>
          <Button color="primary" onClick={() => setRSelected(1)} active={rSelected === 1}>Bom estado</Button>
          <Button color="primary" onClick={() => setRSelected(2)} active={rSelected === 2}>Regular</Button>
          <Button color="primary" onClick={() => setRSelected(3)} active={rSelected === 3}>Mau estado</Button>
        </ButtonGroup>
        <p>Selecionado: {rSelected}</p>

        <div className="form-group">
          <label for="inputItem">Item 2:</label>
          <select id="inputItem" class="form-control">
                <option value = "Pneu">Pneu</option>
                <option value = "Radiador">Radiador</option>
                <option value = "Óleo">Óleo</option>
                <option value = "Combustivel">Combustivel</option>
                <option value = "Filtro">Filtro</option>
                <option value = "Avarias do Veículo">Avarias do Veículo</option>
          </select>
        </div>

        <ButtonGroup>
          <Button color="primary" onClick={() => setRSelected1(1)} active={rSelected1 === 1}>Bom estado</Button>
          <Button color="primary" onClick={() => setRSelected1(2)} active={rSelected1 === 2}>Regular</Button>
          <Button color="primary" onClick={() => setRSelected1(3)} active={rSelected1 === 3}>Mau estado</Button>
        </ButtonGroup>
        <p>Selecionado: {rSelected1}</p>

        <div className="form-group">
          <label for="inputItem">Item 3:</label>
          <select id="inputItem" class="form-control">
                <option value = "Pneu">Pneu</option>
                <option value = "Radiador">Radiador</option>
                <option value = "Óleo">Óleo</option>
                <option value = "Combustivel">Combustivel</option>
                <option value = "Filtro">Filtro</option>
                <option value = "Avarias do Veículo">Avarias do Veículo</option>
          </select>
        </div>
        <ButtonGroup>
          <Button color="primary" onClick={() => setRSelected2(1)} active={rSelected2 === 1}>Bom estado</Button>
          <Button color="primary" onClick={() => setRSelected2(2)} active={rSelected2 === 2}>Regular</Button>
          <Button color="primary" onClick={() => setRSelected2(3)} active={rSelected2 === 3}>Mau estado</Button>
        </ButtonGroup>
        <p>Selecionado: {rSelected2}</p>

        <div className="form-group">
          <label for="inputItem">Item 4:</label>
          <select id="inputItem" class="form-control">
                <option value = "Pneu">Pneu</option>
                <option value = "Radiador">Radiador</option>
                <option value = "Óleo">Óleo</option>
                <option value = "Combustivel">Combustivel</option>
                <option value = "Filtro">Filtro</option>
                <option value = "Avarias do Veículo">Avarias do Veículo</option>
          </select>
        </div>
        <ButtonGroup>
          <Button color="primary" onClick={() => setRSelected3(1)} active={rSelected3 === 1}>Bom estado</Button>
          <Button color="primary" onClick={() => setRSelected3(2)} active={rSelected3 === 2}>Regular</Button>
          <Button color="primary" onClick={() => setRSelected3(3)} active={rSelected3 === 3}>Mau estado</Button>
        </ButtonGroup>
        <p>Selecionado: {rSelected3}</p>

        <div className="form-group">
          <label for="inputItem">Item 5:</label>
          <select id="inputItem" class="form-control">
                <option value = "Pneu">Pneu</option>
                <option value = "Radiador">Radiador</option>
                <option value = "Óleo">Óleo</option>
                <option value = "Combustivel">Combustivel</option>
                <option value = "Filtro">Filtro</option>
                <option value = "Avarias do Veículo">Avarias do Veículo</option>
          </select>
        </div>
        <ButtonGroup>
          <Button color="primary" onClick={() => setRSelected4(1)} active={rSelected4 === 1}>Bom estado</Button>
          <Button color="primary" onClick={() => setRSelected4(2)} active={rSelected4 === 2}>Regular</Button>
          <Button color="primary" onClick={() => setRSelected4(3)} active={rSelected4 === 3}>Mau estado</Button>
        </ButtonGroup>
        <p>Selecionado: {rSelected4}</p>

        <div className="form-group">
          <label for="inputItem">Item 6:</label>
          <select id="inputItem" class="form-control">
                <option value = "Pneu">Pneu</option>
                <option value = "Radiador">Radiador</option>
                <option value = "Óleo">Óleo</option>
                <option value = "Combustivel">Combustivel</option>
                <option value = "Filtro">Filtro</option>
                <option value = "Avarias do Veículo">Avarias do Veículo</option>
          </select>
        </div>
        <ButtonGroup>
          <Button color="primary" onClick={() => setRSelected5(1)} active={rSelected5 === 1}>Bom estado</Button>
          <Button color="primary" onClick={() => setRSelected5(2)} active={rSelected5 === 2}>Regular</Button>
          <Button color="primary" onClick={() => setRSelected5(3)} active={rSelected5 === 3}>Mau estado</Button>
        </ButtonGroup>
        <p>Selecionado: {rSelected5}</p>

        <div className="form-group">
        <label for="Item">Item 7:</label>
        <input type="text" class="form-control" id="Item" placeholder="ex: Outros"></input>
      </div>
        <ButtonGroup>
          <Button color="primary" onClick={() => setRSelected6(1)} active={rSelected6 === 1}>Bom estado</Button>
          <Button color="primary" onClick={() => setRSelected6(2)} active={rSelected6 === 2}>Regular</Button>
          <Button color="primary" onClick={() => setRSelected6(3)} active={rSelected6 === 3}>Mau estado</Button>
        </ButtonGroup>
        <p>Selecionado: {rSelected6}</p>


        <div className="form-group">
        <label for="Item">Hodômetro:</label>
        <input type="text" class="form-control" id="hodometro" placeholder="ex: 10.000Km"></input>
      </div>
      
      <div className="form-group">
        <label for="Observação">Observações:</label>
        <input type="text" class="form-control" id="Item"></input>
      </div>
      </div>
      </div>

      <a href = "./Login.js">
       <button style={c} type="submit" class="btn btn-primary" size="lg">Menu</button>
       </a>

       <form method="post">
        <button style={success} type="submit" class="btn btn-success rounded mx-auto d-block">Enviar</button>
        </form>

        <a href = "./BtnViagem.js">
        <button style={info} type="submit" class="btn btn-info float-right">Voltar</button>
        </a>
     
      </div>
      </div>
    );
  }
  
  export default BtnViagemMotorista;
