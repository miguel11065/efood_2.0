import React from 'react'
import { GlobalCss } from './styles'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
        <Footer />
      </div>
    </>
  )
}

export default App
