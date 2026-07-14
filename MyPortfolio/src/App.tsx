import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './styles/App.css'
import './styles/style.css'
import Home from './Home.tsx'
import Loader from './component/layout/Loader.tsx'
import NotFound from './sections/NotFound.tsx'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  //render
  return (
    <>
      {isLoading ? <Loader /> : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
