import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from "./register"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Product from './Product';
import AddProduct from './addProduct';
import Basket from './basket';
import MangProduct from './mangProduct';
import Layout from './Layot';
import UpdateProduct from './updateProduct';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes >
        <Route path="/" element={<Layout />} >
          <Route index element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/manage-products' element={<MangProduct />} />
          <Route path='/update/:id' element={<UpdateProduct />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
