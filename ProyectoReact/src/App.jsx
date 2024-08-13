import React from 'react';
import  Home  from './Pages/Home.jsx';
import  Carrito  from './Pages/Carrito.jsx';
import  Error404  from './Pages/Error404.jsx';
import  Detail  from './Pages/Detail.jsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/carrito" element={<Carrito />} />
    <Route path='/detail/:pid' element={<Detail/>} />
    <Route path="/*" element={<Error404/>} />
  </Routes>
)
}
export default App