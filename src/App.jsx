import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import NavigationBar from './Components/NavigationBar'
import ViewCart from './Components/ViewCart'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <> 
    <BrowserRouter>
    <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/viewcart' element={<ViewCart/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App