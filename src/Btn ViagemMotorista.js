import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
//import './Btn ViagemMotorista.css';

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
        <h5>Item 1:</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => setRSelected(1)} active={rSelected === 1}>Bom estado</Button>
          <Button color="primary" onClick={() => setRSelected(2)} active={rSelected === 2}>Regular</Button>
          <Button color="primary" onClick={() => setRSelected(3)} active={rSelected === 3}>Mau estado</Button>
        </ButtonGroup>
        <p>Selecionado: {rSelected}</p>

        <h5>Item 2:</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => setRSelected1(1)} active={rSelected1 === 1}>Bom estado</Button>
          <Button color="primary" onClick={() => setRSelected1(2)} active={rSelected1 === 2}>Regular</Button>
          <Button color="primary" onClick={() => setRSelected1(3)} active={rSelected1 === 3}>Mau estado</Button>
        </ButtonGroup>
        <p>Selecionado: {rSelected1}</p>

        <h5>Item 3:</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => setRSelected2(1)} active={rSelected2 === 1}>Bom estado</Button>
          <Button color="primary" onClick={() => setRSelected2(2)} active={rSelected2 === 2}>Regular</Button>
          <Button color="primary" onClick={() => setRSelected2(3)} active={rSelected2 === 3}>Mau estado</Button>
        </ButtonGroup>
        <p>Selecionado: {rSelected2}</p>

        <h5>Item 4:</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => setRSelected3(1)} active={rSelected3 === 1}>Bom estado</Button>
          <Button color="primary" onClick={() => setRSelected3(2)} active={rSelected3 === 2}>Regular</Button>
          <Button color="primary" onClick={() => setRSelected3(3)} active={rSelected3 === 3}>Mau estado</Button>
        </ButtonGroup>
        <p>Selecionado: {rSelected3}</p>

        <h5>Item 5:</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => setRSelected4(1)} active={rSelected4 === 1}>Bom estado</Button>
          <Button color="primary" onClick={() => setRSelected4(2)} active={rSelected4 === 2}>Regular</Button>
          <Button color="primary" onClick={() => setRSelected4(3)} active={rSelected4 === 3}>Mau estado</Button>
        </ButtonGroup>
        <p>Selecionado: {rSelected4}</p>

        <h5>Item 6:</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => setRSelected5(1)} active={rSelected5 === 1}>Bom estado</Button>
          <Button color="primary" onClick={() => setRSelected5(2)} active={rSelected5 === 2}>Regular</Button>
          <Button color="primary" onClick={() => setRSelected5(3)} active={rSelected5 === 3}>Mau estado</Button>
        </ButtonGroup>
        <p>Selecionado: {rSelected5}</p>

        <h5>Item 7:</h5>
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


        <button type="submit" class="btn btn-success rounded mx-auto d-block">Enviar</button>

        <button type="submit" class="btn btn-info float-right">Voltar</button>
  
     
      </div>
    );
  }
  
  export default BtnViagemMotorista;
