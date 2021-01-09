import React, {Component} from 'react';
import '../css/styles.css'

class Button extends Component{
    render(){
      return(
        <div>
          <button className="button" onClick={this.props.acaoBtn}>Abrir Biscoito</button>
        </div>
      );
    }
  }
export default Button;  