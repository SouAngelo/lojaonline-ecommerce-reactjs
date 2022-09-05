import React from 'react'
import RoutesApp from './routes'
import { ProductProvider } from './contexts/contextProducts';

function App() {
  return (
    <div className="App">
      <ProductProvider>
          <RoutesApp/>
      </ProductProvider>
    </div>
  );
}

export default App;
