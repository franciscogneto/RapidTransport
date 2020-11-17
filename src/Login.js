import React, { Component} from "react";
//import './Login.css';
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';

class App extends Component {
    render(){
        return (
            
            <div className="App">

<div className="cont">
    <div className="form sign-in">
      <h2>Rapid Transport</h2>
      <label>
        <span>Usuário</span>
        <input type="text" name="text"></input>
        <span>Senha</span>
        <input type="password" name="password"></input>
      </label>
      <button className="submit" type="button">Login</button>
    
      <div className="social">
        <ul>
          
                <li><a href="https://pt-br.facebook.com/"><img src={facebook}/></a></li>
                <li><a href="https://twitter.com/login?lang=pt"><img src={twitter}/></a></li>
                <li><a href="https://www.linkedin.com/uas/login?_l=pt"><img src={linkedin}/></a></li>
                <li><a href="https://www.instagram.com/?hl=pt-br"><img src={instagram}/></a></li>
         
        </ul>
      </div>
    </div>

    <div className="sub-cont">
      <div className="img">
        <div className="img-text m-up">
          <h2>Precisa transportar?</h2>
          <p>O transporte de cargas em geral é o formato mais utilizado no Brasil. Ele é o mais flexível, pois define-se com maior liberdade os tipos de mercadorias que podem ser transportados </p>
          <p>Somos uma das maiores empresas de logística e transportes de cargas expressas fracionadas do país e uma das maiores operadoras de e-commerce.</p>
        </div>
      </div>   
      </div>
    </div>
  </div>



            
        );
    }
}

export default App;