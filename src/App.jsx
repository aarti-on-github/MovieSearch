import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import SingleMoviePage from './SingleMoviePage'
import Error from './Error'
import './App.css';
const App = () => {
  return (
    <div>
     
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='Movie/:Id'element={<SingleMoviePage/>}/>
      <Route path='*'element={<Error/>}/>
     </Routes>
 
    </div>
  )
}

export default App


