import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Number from './components/Number'
import Boolean from './components/Boolean'
import About from './components/About'
import State from './components/State'
import Doraemon from './components/Doraemon'
import './App.css'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>

        
        <Route 
          path="/" 
          element={
            <>
            
              <Banner />
              <Cards />
              <Number />
              <Boolean />
            </>
          } 
        />

       
        <Route path="/about" element={<About />} />
<Route path="/state" element={<State />} />
<Route path="/dora" element={<Doraemon />} />
      </Routes>

    </>
  )
}

export default App
