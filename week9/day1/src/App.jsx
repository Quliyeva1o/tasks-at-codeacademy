import './App.css'
import React, { useEffect, useState } from 'react'
import Form from './compoents/Form'
import Products from './compoents/Products'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [products, setProducts] = useState([]);
  return (
    <>
    <Form products={products} setProducts={setProducts}/>
    <Products products={products} setProducts={setProducts}/>
    </>
  )
}

export default App





