import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';
import Context from './context/Context';

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Routers />
      </Context>
    </BrowserRouter>
  );
}

export default App;
