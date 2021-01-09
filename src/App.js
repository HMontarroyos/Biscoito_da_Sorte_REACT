import React,{Component} from 'react'
import './css/styles.css'
import Imagem from './img/cookie.png';
import Button from './components/Button.js';
import Frase  from './components/Frase.js'


class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      textoFrase:''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = Frase;
    
  }

quebraBiscoito(){
  let state = this.state;
  let numeroAleatorio = Math.floor(Math.random()* this.frases.length);
  state.textoFrase = '"'+ this.frases[numeroAleatorio] + '"';
  this.setState(state);
}


  render(){
    return(
      <div className="container">
        <img alt='biscoito da sorte'src={Imagem} className="img"/>    
        <Button acaoBtn={this.quebraBiscoito}/>
        <h3 className="frase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}




export default App;