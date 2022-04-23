import { useState } from 'react'
import './App.css'
import Contact    from './components/contact/Contact'
import About      from './components/about/About'
import Experience from './components/experience/Experience'
import Header     from './components/header/Header'
import Footer     from './components/footer/Footer'
import Nav        from './components/nav/Nav'
import Portfolio        from './components/portfolio/Portfolio'
import Testimonials        from './components/testimonials/Testimonials'


function App() {
  const [count, setCount] = useState(0)
  
 
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
         <p>
          <button type="button">
            Reinicio
          </button>
        </p>
        <About />
        <Contact/>
        <Experience/>
        <Header />
        <Footer />
        <Nav />
        <Testimonials />
        <Portfolio/>
      </header>
    </div>
  )
}

export default App
