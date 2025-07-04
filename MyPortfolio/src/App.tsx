import './App.css'
import First from './Hero&Nav.tsx'
import Form from './Form.tsx' // formulaire
import { useState } from 'react'

function App() {

  //render
  return (
    <>
    <First />
    <div style={{display: "flex"}}>
      {/* <Form /> */}
    </div>
    </>
  )
}

export default App
