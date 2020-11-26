import React, { Component} from "react";
//import './Login.css';
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';


const div = {
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
  fontFamily: 'Nunito', 
  fontFamily: 'sans-serif'
}

const body = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Nunito', 
  fontFamily: 'sans-serif',
  backgroundSize: 'cover'
}


const cont = {
  overflow: 'hidden',
  position: 'relative',
  width: '900px',
  height: '550px',
  background: '#fff',
  boxShadow: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
  marginTop: '40px'
}

const form = {
  position: 'relative',
  width: '640px',
  height: '100%',
  padding: '50px 30px'
}

const h2 = {
  width: '100%',
  fontSize: '30px',
  textAlign: 'center'
}

const label = {
  display: 'block',
  width: '260px',
  margin: '25px auto 0',
  textAlign: 'center',
  marginLeft: '180px'
}

const span = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#505f75',
  textTransform: 'uppercase'
}

const input = {
  display: 'block',
  width: '100%',
  marginTop: '5px',
  fontSize: '16px',
  paddingBottom: '5px',
  borderBottom: '1px solid rgba(109, 93, 93, 0.4)',
  textAlign: 'center',
  fontFamily: 'Nunito',
  fontFamily: 'sans-serif'
}

const button = {
  display: 'block',
  margin: '0 auto',
  width: '260px',
  height: '36px',
  borderRadius: '30px',
  color: '#fff',
  fontSize: '15px',
  cursor: 'pointer',
}

const submit = {
  marginTop: '40px',
  marginBottom: '30px',
  textTransform: 'uppercase',
  fontWeight: '600px',
  fontFamily: 'Nunito', 
  fontFamily: 'sans-serif',
  background: "-webkit-linear-gradient(to left, #33ccff, #0000ff)",
  marginLeft: '180px'
}


const social = {
  width: '100%',
  textAlign: 'center',
  marginTop: '20px'
}

const ul = {
  listStyle: 'none'
}

const li = {
  display: 'inline-block',
  cursor: 'pointer',
  margin: '25px 15px'
}

const socialimg = {
  width: '40px',
  height: '40px',
  color: '#FFFF'
}

const subcont = {
  overflow: 'hidden',
  position: 'absolute',
  left: '640px',
  top: '0',
  width: '900px',
  height: '120%',
  background: '#fff'
}


const img = {
  overflow: 'hidden',
  zIndex: '2',
  position:'absolute',
  left: '0',
  top: '0',
  width: '260px',
  height: '100%',
  paddingTop: '360px'
}

const before = {
  content: '',
  position: 'absolute',
  right: '0',
  top: '0',
  width: '900px',
  height: '100%',
  backgroundSize: 'cover',
}


const imgtext = {
  zIndex: '2',
  position: 'absolute',
  left: '0',
  top: '50px',
  width: '100%',
  padding: '0',
  padding:'20px',
  textAlign: 'center',
  color: '#fff'
}

const texth2 = {
  marginBottom: '10px',
  fontWeight: 'normal'
}
const p = {
  fontSize: '14px',
  lineHeight: '1.5'
}

const signin = {
  paddingTop: '65px'
}


class Login extends Component {
  render(){
      return (
<div >
<body >
<div className="Login">

<div className="cont">
<form>

  <div className="form sign-in">

    <h2>Rapid Transport</h2>
    <label>
  
      <span >Usuário</span>
      <input  type="text" name="text"></input>
      <span >Senha</span>
      <input  type="password" name="password"></input>
    </label>
    <submit > 
    <button  className="submit" type="button">Login</button>
    </submit>
    <div className="social">
      <ul>
        
              <li ><a href="https://pt-br.facebook.com/"><img src={facebook}/></a></li>
              <li ><a href="https://twitter.com/login?lang=pt"><img src={twitter}/></a></li>
              <li ><a href="https://www.linkedin.com/uas/login?_l=pt"><img src={linkedin}/></a></li>
              <li ><a href="https://www.instagram.com/?hl=pt-br"><img src={instagram}/></a></li>
              
      </ul>
    </div>
  </div>
  </form>

  
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
</body> 
</div>   
      );
  }
}

export default Login;