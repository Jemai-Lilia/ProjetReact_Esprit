// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Events from './Component/Events'
import TypesExample from './Components/Atelier/Boutton'
import ComponentClass from './Components/Atelier/ComponentClass'
import ComponentFunc from './Components/Atelier/ComponentFonctionel'

import Form from './Components/Atelier/Form'
import Hello from './Components/Atelier/Hello'
import ListManager from './Components/Atelier/ListManager'
import { Link, Route, Router, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import { Suspense } from 'react'

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

{/* <Hello/>
<Form labelle="FirstName" namee="firstName" />
<Form labelle="SecondName" />
<TypesExample /><br/>
<ComponentClass></ComponentClass><br/>
<ComponentFunc></ComponentFunc>
<br/>

<br/>
<ListManager initialItems={["React", "Angular", "VueJs"]} placeholder="Ajouter un framework" />
 */}
  <Suspense fallback={<div>Loading ...</div>}>
      <nav>
        <Link to="/hello">Home</Link>
      </nav>

      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/events" element={<Events />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>

    </>
  )
}

export default App
