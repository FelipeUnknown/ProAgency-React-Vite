import { useState } from 'react';
import './App.css';
import Header from '../src/components/header/header';
import Hero from './components/hero/hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    </>
  )
}

export default App
