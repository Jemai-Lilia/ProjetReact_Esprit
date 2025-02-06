// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TypesExample from './Components/Boutton'
import ComponentClass from './Components/ComponentClass'
import Counter from './Components/ComponentEffect'
import ComponentFunc from './Components/ComponentFonctionel'
import Timer from './Components/ComponentTimer'

import Form from './Components/Form'
import Hello from './Components/Hello'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

<Hello/>
<Form labelle="FirstName" namee="firstName" />
<Form labelle="SecondName" />
<TypesExample /><br/>
<ComponentClass></ComponentClass><br/>
<ComponentFunc></ComponentFunc>
<br/>
<Counter></Counter>
<br />
<Timer></Timer>
<br/>


    </>
  )
}

export default App
