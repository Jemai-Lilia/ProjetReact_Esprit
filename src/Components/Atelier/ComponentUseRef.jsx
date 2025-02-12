import  { useRef } from 'react';
 
function TextInputFocus() {
  const inputRef = useRef(null);
 
  const handleFocus = () => {
    inputRef.current.focus(); // Met le focus sur le champ de texte
  };
 
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Cliquez sur le bouton pour focus" />
      <button onClick={handleFocus}>Focus sur l input</button>
    </div>
  );
}
 
export default TextInputFocus;