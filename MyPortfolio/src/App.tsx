import { useState, useEffect } from 'react'
import './App.css'
import Home from './Home.tsx'
import Form from './Form.tsx' // formulaire
import Loader from './component/Loader.tsx'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  //render
  return (
    <>
      {isLoading ? <Loader /> : <Home />}
    </>
  )
}

export default App
