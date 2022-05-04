import { useState } from 'react'
import './App.css'
import Contact        from './components/contact/Contact'
import About          from './components/about/About'
import Experience     from './components/experience/Experience'
import Header         from './components/header/Header'
import Footer         from './components/footer/Footer'
import Services       from './components/services/Services'
import Nav            from './components/nav/Nav'
import Portfolio      from './components/portfolio/Portfolio'
import Testimonials   from './components/testimonials/Testimonials'


function App() {
  const [count, setCount] = useState(0)
  
 
  return (
    <div className="App">
            <Header />
            <About />
            <Services />
            <Experience/>
            <Portfolio/>
          
            <Testimonials />
            <Nav />
            <Contact/>
            <Footer />
    </div>
  )
}

export default App
