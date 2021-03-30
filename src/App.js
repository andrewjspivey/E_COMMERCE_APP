import logo from './logo.svg';
import './App.css';
import {getProducts} from './utils/fetch'
import { React, Component } from 'react'
import ProductCard from './Products/ProductCard'



function App() {
  return (
      <div>
        <ProductCard />
      </div>
    );
  }


export default App;
