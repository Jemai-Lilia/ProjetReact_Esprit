import { useState } from 'react';
import { Button } from 'react-bootstrap';

function ComponentFunc(){
    const  [monTexte,setMonText]=useState("Hello Lilia")
    const [value,setValue]=useState(0);
    const handleClick=()=>{
        setValue(value+1)
    }
    
    return (<>    

        Ceci un composant functionnels 
        {monTexte}
        {value}
        <br/>
  
        <Button variant="primary"  onClick={()=>handleClick()}>Incrémenter</Button>
  
        
  
        </>);
  
}
export default ComponentFunc;