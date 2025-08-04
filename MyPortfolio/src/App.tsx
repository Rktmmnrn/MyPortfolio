import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css'
import Home from './Home.tsx'
// import Form from './Form.tsx' // formulaire
import Loader from './component/Loader.tsx'
import NotFound from './sections/NotFound.tsx'

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
      {isLoading ? <Loader /> : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Not found page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
