
import { Component } from 'react';
import { Button } from 'react-bootstrap';

class ComponentClass extends Component {
    state = {monTexte:"Hello lilia",value:0}
    handleClick=()=>{
        this.setState({
            value:this.state.value+1
        })
    }

  render() { 

    return (<>    

      Ceci un composant de classe
      {this.state.monTexte}
      {this.state.value}
      <br/>

      <Button variant="primary"  onClick={()=>this.handleClick()}>Incrémenter</Button>

      

      </>);

  }}

 

export default ComponentClass;