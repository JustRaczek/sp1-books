import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <form>
        <p>
        Tytuł książki:
      <input type='edit'></input> 
      </p>
      <p>
        Autor książki:
      <input type='edit'></input>
      </p>
      <p>
        Gatunek:
      <select>
        <option value="0"></option>
        <option value="1">Powieść</option>
        <option value="2">Kryminał</option>
        <option value="3">Fantastyka</option>
        <option value="4">Biografia</option>
      </select>
      </p>
      <button id='przyciskZatwierdz' formAction={}>Dodaj</button>
      </form>
      
      
    </div>
      
    </>
  )
}

export default App
