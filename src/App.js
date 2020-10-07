import React from 'react'
import '@audius/stems/dist/stems.css'
import '@audius/stems/dist/avenir.css'

import './App.css'

import LibsExample from './examples/LibsExample/LibsExample'
import HttpApiExample from './examples/HttpApiExample/HttpApiExample'


const App = () => {
  return (
    <div className="App">
      <h1>Http API Example</h1>
      <HttpApiExample />

      <h1>Libs Example</h1>
      <LibsExample />
    </div>
  );
}

export default App;
