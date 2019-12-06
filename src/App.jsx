import React from 'react'

import Button from './Button';

const click = () => {
  alert('Olá')
}

const App = () => (
  <>
    <h1>Hello World!</h1>
    <Button title="alerta" click={click} label="oi" />
    <Button title="console" click={() => console.log('Tchau')} />
  </>
)

export default App;
