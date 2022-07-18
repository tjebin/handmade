import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { AboutPage, HomePage, CartPage, ProductsPage, ErrorPage } from './pages';

function App() {
  return <BrowserRouter>
    <Navbar />
    <Sidebar />
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route exact path="/cart" element={<CartPage />}></Route>
      <Route exact path="/products" element={<ProductsPage />}></Route>
      <Route exact path="/about" element={<AboutPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
}

export default App;
