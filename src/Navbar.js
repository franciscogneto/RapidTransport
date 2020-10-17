import { timers } from 'jquery';
import React, { Component } from 'react';
import navbar from './Navbar.css';

class Navbar extends Component {
    render(){
        return(

            <div className="container-fluid p-0">

            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href=""><i class="fas fa-dolly"></i>Rapid Transport</a>
            
            <div className="navbar ml-auto">   
<p>
            <button class="btn btn-outline-light" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Quem Somos
  </button>

  <button class="btn btn-outline-light" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
 Fale Conosco
  </button>
</p>

<div class="collapse" id="collapseExample">
  <div class="card card-body">
  Somos uma das maiores empresas de logística e transportes de cargas expressas fracionadas do país e uma das maiores operadoras de e-commerce.
  </div>
</div>

<div class="collapse" id="collapseExample1">
  <div class="card card-body">
  Entre em contato com nossa central de atendimentos 24h ou acesse nossas redes sociais
  </div>
</div>

              </div>
              </nav> 
        
              <footer className="col-12 p-3 footer">
               <countainer className="container col-12 col-md-4 d-flex justify-content-around">
               <a className="navbar-nav-link" href="https://pt-br.facebook.com/"><i class="fab fa-facebook-square"></i></a>
               <a className="navbar-nav-link" href="https://br.linkedin.com/"><i class="fab fa-linkedin"></i></a>
               <a className="navbar-nav-link" href="https://www.instagram.com/?hl=pt-br"><i class="fab fa-instagram"></i></a>
               <a className="navbar-nav-link" href="https://twitter.com/login?lang=pt"><i class="fab fa-twitter-square"></i></a>
               </countainer>   
               </footer>
               </div>
               
          )
    }
    
}
export default Navbar;
