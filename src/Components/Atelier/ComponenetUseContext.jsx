import  { createContext, useContext } from 'react';
 
const ThemeContext = createContext();
 
function ThemedButton() {
  const theme = useContext(ThemeContext); // Consomme le contexte
  return <button style={{ backgroundColor: theme }}>Je suis stylé !</button>;
}
 
function App() {
  return (
    <ThemeContext.Provider value="lightblue">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
 
export default App;