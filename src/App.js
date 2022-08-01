import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { AboutPage, HomePage, CartPage, ProductsPage, CheckoutPage, ErrorPage, SingleProductPage, PrivateRoute, AuthWrapper } from './pages';

function App() {
  return <AuthWrapper> <BrowserRouter>
    <Navbar />
    <Sidebar />
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route exact path="/cart" element={<CartPage />}></Route>
      <Route exact path="/products" element={<ProductsPage />}></Route>
      <Route exact path="/products/:id" element={<SingleProductPage />}></Route>
      <Route exact path="/about" element={<AboutPage />}></Route>
      {/* <Route exact path="/checkout" element={<CheckoutPage />}></Route> */}
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
  </AuthWrapper>
}

export default App;
