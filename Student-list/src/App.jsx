import { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import './App.css'
import ContactHeader from './components/ContactHeader'
import ContactForm from './components/ContactForm'

function App() {

  return (
    <>
     <Navigation/>
     <ContactHeader/>
     <ContactForm/>
    </>
  )
}

export default App
