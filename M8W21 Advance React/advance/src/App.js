import logo from './logo.svg';
import './App.css';
import Styled from './components/Styled';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';
import Context from './components/Context/Context';
import Ref from './components/Ref';
import Material from './components/Material';
import Bootstrap from './Bootstrap';

function App() {
  const params = useParams();

  return (
    <div className="App">
      <nav><h1>Welcome to my page</h1></nav>
      <BrowserRouter>
        <Routes>
          <Route path="/products/edit" element={<Products />} />
          <Route path="/styled" element={<Styled />} />
          <Route path="*" element={<h1>Wrong page</h1>} />
          <Route path='/' element={
            <div>
              <h1>Home page</h1>
            </div>
          } />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />

          <Route path="/context" element={<Context />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/material" element={<Material />} />
          <Route path="/bootstrap" element={<Bootstrap />} />
          
          
        </Routes>
      </BrowserRouter>
      <footer><h3>Please contact me for more info</h3></footer>
    </div>
  );
}

export default App;